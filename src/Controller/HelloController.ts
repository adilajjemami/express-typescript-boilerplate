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
}
