import express from 'express';
import bodyParser from 'body-parser';
import { Core } from './Core/Core';
import { DependencyInjection } from './Core/DependencyInjection';
import { ApiError } from './Utils/ApiError';

/**
 * Server class.
 *
 * @class Server
 */
export class Server {

  /**
   * Bootstrap method.
   *
   * @return Promise<Server>
   *
   * @static
   *
   * @async
   */
  public static async bootstrap(): Promise<Server> {
    await Core.bootstrap();

    return new Server();
  }

  /**
   * Express application
   *
   * @var express.Application
   */
  protected app: express.Application;

  /**
   * Controllers.
   *
   * @var { [index: string]: any; }
   */
  protected controllers: { [index: string]: any; } = {};

  /**
   * Middlewares.
   *
   * @var { [index: string]: any; }
   */
  protected middlewares: { [index: string]: any; } = {};

  /**
   * Constructor
   */
  private constructor() {
    this.app = express();
    this.initMiddlewares();
    this.routing();
  }

  /**
   * Get application method.
   *
   * @return express.Application
   */
  public getApp(): express.Application {
    return this.app;
  }

  /**
   * Get port function.
   *
   * @return any
   */
  public getPort(): any {
    const port = process.env.NODE_PORT;
    if (undefined === port) {
      return 3000;
    }

    return parseInt(port, 10);
  }

  /**
   * Init middlewares method.
   *
   * @return void
   */
  private initMiddlewares(): void {
    this.app
      .use(bodyParser.urlencoded({ extended: true }));
    this.app
      .use(bodyParser.json());
    this.app
      .use(bodyParser.json({ type: 'application/json' }));

    const middlewares = Core.getMiddlewares();
    for (const key in middlewares) {
      DependencyInjection.instanciate(
        middlewares[key],
        Core.getServices(),
        Core.getParameters(),
      ).then((instance) => {
        this.middlewares[key] = instance.handle.bind(instance);
        if (middlewares[key].global) {
          this.app.use(this.middlewares[key]);
        }
      });
    }
  }

  /**
   * Router method.
   *
   * @return Promise<void>
   *
   * @async
   */
  private async routing(): Promise<void> {
    const routes = Core.getRouting();
    const rootDir = Core.getParameter('rootDir');
    for (const routeName in routes) {
      const route: { [index: string]: any; } = routes[routeName];
      const controllerInfo = route.controller.split(':');
      const action = controllerInfo.pop();
      const className = (controllerInfo[0].split('/')).pop();
      const classPath = rootDir + controllerInfo[0];

      let controller: { [index: string]: any; };
      if (!this.controllers[classPath]) {
        const file = await DependencyInjection.import(classPath);
        controller = new file[className]();
        this.controllers[classPath] = controller;
      } else {
        controller = this.controllers[classPath];
      }

      const expressRouter = express.Router();
      switch (route.method) {
        case 'get':
          expressRouter.get(route.uri, controller[action]);
          break;
        case 'post':
          expressRouter.post(route.uri, controller[action]);
          break;
        case 'put':
          expressRouter.put(route.uri, controller[action]);
          break;
        case 'delete':
          expressRouter.delete(route.uri, controller[action]);
          break;
      }

      this.app.use(expressRouter);
    }

    this.app
      .all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        throw new ApiError('pageNotFound');
      });
  }
}
