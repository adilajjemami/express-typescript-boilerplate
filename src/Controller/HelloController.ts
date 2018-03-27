import { Request, Response, NextFunction } from 'express';
import { BaseController } from './BaseController';

/**
 * HelloController class.
 *
 * @class HelloController
 */
export class HelloController extends BaseController {
  /**
   * Index method.
   *
   * @param req  Request
   * @param res  Response
   * @param next NextFunction
   *
   * @return void
   */
  public index(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      message: super.getService('helloService')
        .sayHelloWorld() + ' Injected in a fake controller!',
    });
  }

  /**
   * Post method.
   *
   * @param req  Request
   * @param res  Response
   * @param next NextFunction
   *
   * @return void
   */
  public post(req: Request, res: Response, next: NextFunction) {
    console.log('------------');
    console.log('req.body', req.body);
    console.log('------------');
    res.status(200).json({
      message: `Hello ${req.body.name}! POST!`,
    });
  }

  /**
   * Put method.
   *
   * @param req  Request
   * @param res  Response
   * @param next NextFunction
   *
   * @return void
   */
  public put(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      message: `Hello ${req.body.name}! PUT`,
    });
  }

  /**
   * Delete method.
   *
   * @param req  Request
   * @param res  Response
   * @param next NextFunction
   *
   * @return void
   */
  public delete(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      message: `Hello ${req.body.name}! DELETE`,
    });
  }
}
