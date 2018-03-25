import config from '../Resources/config/config';
import { DependencyInjection } from './DependencyInjection';

/**
 * Core class.
 *
 * @class Core
 */
export class Core {
  /**
   * Bootstrap method.
   *
   * @return Core
   *
   * @static
   */
  public static async bootstrap(): Promise<void> {
    const cfg = await this.initEnvConfig();
    this.initParameters(cfg);
  }

  /**
   * Parameters.
   *
   * @var { [index: string]: any; }
   */
  protected static parameters: { [index: string]: any; };

  /**
   * Get parameter method.
   *
   * @param name string
   *
   * @return any
   *
   * @static
   */
  public static getParameter(name: string): any {
    return this.parameters[name];
  }

  /**
   * Get routing method.
   *
   * @param config any
   *
   * @return void
   *
   * @static
   */
  private static initParameters(config: any) {
    this.parameters = config.parameters;
  }

  /**
   * Init env configuration method.
   *
   * @return Promise<any>
   *
   * @static
   *
   * @async
   */
  private static async initEnvConfig(): Promise<any> {
    let env = process.env.NODE_ENV || 'dev';
    // Capitalize the first letter
    env = env.charAt(0).toUpperCase() + env.slice(1);
    // Import the environement configuration
    const envConfig = await DependencyInjection.import('../Resources/config/config' + env);

    return { ...config, ...envConfig.default };
  }
}
