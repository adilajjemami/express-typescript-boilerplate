import 'mocha';
import { assert } from 'chai';
import services from '../../src/config/services';

describe('Services', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (services) === 'object');
  });
});
