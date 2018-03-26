import { Core } from '../Core/Core';

/**
 * BaseController class.
 *
 * @class BaseController
 */
export abstract class BaseController {

  /**
   * Get parameter method.
   *
   * @param name string
   *
   * @return string
   */
  protected getParameter(name: string): any {
    return Core.getParameter(name);
  }

  /**
   * Get service method.
   *
   * @param name string
   *
   * @return string
   */
  protected getService(name: string): any {
    return Core.getService(name);
  }
}
