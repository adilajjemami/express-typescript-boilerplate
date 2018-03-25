import 'mocha';
import { assert } from 'chai';
import { Core } from '../../src/Core/Core';

describe('Core', () => {
  it('get rootDir parameter', () => {
    Core.bootstrap()
      .then(() => {
        assert.isTrue(typeof (Core.getParameter('rootDir')) === 'string');
      });
  });
});
