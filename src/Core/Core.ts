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
    this.services = await this.initServices(cfg);
    this.initRouting(cfg);
  }

  /**
   * Parameters.
   *
   * @var { [index: string]: any; }
   */
  protected static parameters: { [index: string]: any; };

  /**
   * Services.
   *
   * @var { [index: string]: any; }
   */
  protected static services: { [index: string]: any; } = {};

  /**
   * Routing.
   *
   * @var { [index: string]: any; }
   */
  protected static routing: { [index: string]: any; };


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
   * Get service method.
   *
   * @param name string
   *
   * @return any
   *
   * @static
   */
  public static getService(name: string): any {
    return this.services[name];
  }

  /**
   * Get routing method.
   *
   * @return { [index: string]: any; }
   *
   * @static
   */
  public static getRouting(): { [index: string]: any; } {
    return this.routing;
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
   * Get routing method.
   *
   * @param config any
   *
   * @return Promise<{ [index: string]: any; }>
   *
   * @static
   *
   * @async
   */
  private static async initServices(config: any): Promise<{ [index: string]: any; }> {
    const result: { [index: string]: any; } = {};

    try {
      for (const key in config.services) {
        const instance = await DependencyInjection.instanciate(
          config.services[key],
          result,
          this.parameters,
        );
        result[key] = instance;
      }
    } catch (error) {
      throw error;
    }

    return result;
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
  private static initRouting(config: any) {
    this.routing = config.routing;
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
