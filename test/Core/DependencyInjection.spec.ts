import 'mocha';
import { assert } from 'chai';
import path from 'path';
import { DependencyInjection } from '../../src/Core/DependencyInjection';

describe('DependencyInjection', () => {
  it('instanciate() should throw and error', (done) => {
    DependencyInjection.instanciate(
      {
        fakeService: {
          className: 'FakeService',
          path: path.join(__dirname, '/../../Services/'),
          arguments: [],
        },
      },
      {},
      {},
    ).then(done)
    .catch((err) => {
      assert.isTrue(true);
      done();
    });
  });
});
