import 'mocha';
import { assert } from 'chai';
import path from 'path';
import { DependencyInjection } from '../../src/Core/DependencyInjection';
import { FakeService } from '../../src/Services/FakeService';

describe('DependencyInjection', () => {
  it('instanciate() should create helloService instance', (done) => {
    const fakeService = new FakeService();
    DependencyInjection.instanciate(
      {
        className: 'HelloService',
        path: 'rootDir/Services/',
        arguments: ['@fakeService', '%rootDir%'],
      },
      {
        fakeService,
      },
      {
        rootDir: path.join(__dirname, '../../src/'),
      },
    ).then((instance) => {
      assert.isTrue(true);
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('instanciate() should throw and error', (done) => {
    DependencyInjection.instanciate(
      {
        fakeService: {
          className: 'FakeService',
          path: 'rootDir/',
          arguments: [],
        },
      },
      {},
      {},
    ).then()
    .catch((err) => {
      assert.isTrue(true);
      done();
    });
  });
});
