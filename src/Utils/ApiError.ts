import { GlobalMessage } from './GlobalMessage';

/**
 * Exception class.
 *
 * @class Exception
 */
export class ApiError extends Error {
  /**
   * Error code.
   *
   * @var string
   */
  public errorCode: string;

  /**
   * Error description.
   *
   * @var string
   */
  public errorDescription: string;

  /**
   * Http status.
   *
   * @var string
   */
  public status: number;

  public constructor(errorCode: string, args?: { [index:string]: any }) {
    const error: { [index: string]: any } = GlobalMessage.getError(errorCode);
    super(error.errorDescription);
    this.errorCode = error.errorCode;
    this.errorDescription = error.errorDescription;
    this.status = error.status;

    // restore prototype chain
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    }
  }

  /**
   * Get error code method.
   *
   * @return string
   */
  public getErrorCode(): string {
    return this.errorCode;
  }

  /**
   * Get error description method.
   *
   * @return string
   */
  public getErrorDescription(): string {
    return this.errorDescription;
  }

  /**
   * Get http status method.
   *
   * @return number
   */
  public getStatus(): number {
    return this.status;
  }
}
