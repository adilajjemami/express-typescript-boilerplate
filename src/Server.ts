import express from 'express';
import { Core } from './Core/Core';

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
    const s = new Server();

    return s;
  }

  /**
   * Express application
   *
   * @var express.Application
   */
  protected app: express.Application;

  /**
   * Constructor
   */
  private constructor() {
    this.app = express();
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
}
