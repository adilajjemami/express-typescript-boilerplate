import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../Utils/ApiError';

/**
 * ErrorMiddleware class.
 *
 * @class ErrorMiddleware
 */
export class ErrorMiddleware {
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
  public handle(err: any, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof ApiError) {
      res.status(err.getStatus())
        .json({
          errorCode: err.getErrorCode(),
          errorDescription: err.getErrorDescription(),
        });
    } else {
      const error = new ApiError('internalError');
      res.status(error.getStatus())
        .json({
          errorCode: error.getErrorCode(),
          errorDescription: error.getErrorDescription(),
        });

    }
    next();
  }
}
