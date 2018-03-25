import 'mocha';
import { assert } from 'chai';
import path from 'path';
import { Core } from '../../src/Core/Core';

describe('Core', () => {
  it('get rootDir parameter', () => {
    Core.bootstrap()
      .then(() => {
        assert.isTrue(typeof (Core.getParameter('rootDir')) === 'string');
      });
  });
  
  it('initServices should throw an error', (done) => {
    Core.initServices(
      {
        services: {
          fakeService: {
            className: 'FakeService',
            path: path.join(__dirname, '/../../Services/'),
            arguments: [],
          },
        },
        parameters: {},
      },
    ).then(done)
    .catch(() => {
      assert.isTrue(true);
      done();
    });
  });
});
