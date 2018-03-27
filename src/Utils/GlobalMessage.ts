/**
 * GlobalMessage class.
 *
 * @class GlobalMessage
 */
export class GlobalMessage {

  /**
   * Init method.
   *
   * @static
   *
   * @async
   */
  public static init(): void {
    this.errors = require('../../Resources/errors.json');
  }

  /**
   * Get error method.
   *
   * @param errorCode
   *
   * @return { [index: string]: any }
   *
   * @static
   */
  public static getError(errorCode: string): { [index: string]: any } {
    return this.errors[errorCode];
  }

  /**
   * Errors
   *
   * @var { [index: string]: any }
   */
  private static errors: { [index: string]: any } = {};
}
