import 'mocha';
import { assert } from 'chai';
import path from 'path';
import { Core } from '../../src/Core/Core';

describe('Core', () => {
  it('force initEnvConfig() in dev env', () => {
    process.env.NODE_ENV = '';
    Core.bootstrap()
      .then(() => {
        process.env.NODE_ENV = 'test';
        assert.isTrue(typeof (Core.getParameter('rootDir')) === 'string');
      });
  });

  it('get rootDir parameter', () => {
    Core.bootstrap()
      .then(() => {
        assert.isTrue(typeof (Core.getParameter('rootDir')) === 'string');
      });
  });

  it('getRouting() should return an object', () => {
    Core.bootstrap()
      .then(() => {
        assert.isObject(Core.getRouting());
      });
  });

  it('initServices should throw an error', (done) => {
    Core.initServices(
      {
        services: {
          fakeService: {
            className: 'FakeService',
            path: 'rootDir/Services/FakePath',
            arguments: [],
          },
        },
      },
    ).then()
    .catch(() => {
      assert.isTrue(true);
      done();
    });
  });
});
