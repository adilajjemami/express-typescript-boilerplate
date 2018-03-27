import 'mocha';
import { assert } from 'chai';
import parameters from '../../src/config/parameters';

describe('Parameters', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (parameters) === 'object');
  });
});
