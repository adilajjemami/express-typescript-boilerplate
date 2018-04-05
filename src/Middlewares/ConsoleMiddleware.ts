import { Request, Response, NextFunction } from 'express';

/**
 * ConsoleMiddleware class.
 *
 * @class ConsoleMiddleware
 */
export class ConsoleMiddleware {
  /**
   * Handle method.
   *
   * @param req  Request
   * @param res  Response
   * @param next NextFunction
   *
   * @return void
   *
   * @static
   */
  public handle(req: Request, res: Response, next: NextFunction): void {
    console.log(req);
    next();
  }
}
