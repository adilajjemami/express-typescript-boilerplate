import { FakeService } from './FakeService';
/**
 * HelloService class.
 *
 * @class HelloService
 */
export class HelloService {
  /**
   * FakeService.
   *
   * @var FakeService
   */
  private fakeService: FakeService;

  /**
   * rootDir.
   *
   * @var String
   */
  private rootDir: String;

  /**
   * Constructor.
   *
   * @param fakeService FakeService
   * @param rootDir     string
   *
   * @constructor
   */
  public constructor(fakeService: FakeService, rootDir: string) {
    this.fakeService = fakeService;
    this.rootDir = rootDir;
  }

  /**
   * Say hello method.
   *
   * @return string
   */
  public sayHelloWorld(): string {
    return 'Hello world! ' + this.fakeService.sayImFake();
  }
}
