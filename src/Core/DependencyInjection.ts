import path from 'path';

/**
 * DependencyInjection class.
 *
 * @class DependencyInjection
 */
export class DependencyInjection {
  /**
   * Instanciate a given class method.
   *
   * @param myClass    { [index: string]: any; }
   * @param services   { [index: string]: any; }
   * @param parameters { [index: string]: any; }
   *
   * @return Promise<any>
   *
   * @static
   *
   * @async
   */
  public static async instanciate(
    myClass: { [index: string]: any; },
    services: { [index: string]: any; },
    parameters: { [index: string]: any; }): Promise<any> {
    try {
      const reg = /rootDir/gi;
      const classPath = myClass.path.replace(
        reg,
        path.join(__dirname, '..'),
      );
      const file = await this.import(classPath + myClass.className);

      const args: any[] = [];
      myClass.arguments.forEach((arg: string) => {
        const firstChar = arg.charAt(0);
        if (firstChar === '@') {
          const serviceName = arg.substring(1, arg.length).trim();
          args.push(services[serviceName]);
        } else if (firstChar === '%') {
          const parameterName = arg.substring(1, arg.length - 1).trim();
          args.push(parameters[parameterName]);
        }
      });

      return new (file[myClass.className])(...args);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Import method.
   *
   * @param path string
   *
   * @return Promise<any>
   */
  public static async import(path: string): Promise<any> {
    return await import(path);
  }
}
