import 'mocha';
import { assert } from 'chai';
import { Core } from '../../src/Core/Core';
import { HelloService } from '../../src/Services/HelloService';

describe('HelloService', () => {
  it('sayHello() should return Hello world! I\'m a fake service!', () => {
    Core.bootstrap()
      .then(() => {
        const helloService = new HelloService(
          Core.getService('fakeService'),
          Core.getParameter('rootDir'),
        );
        assert.equal(
          helloService.sayHelloWorld(),
          'Hello world! I\'m a fake service!',
        );
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
