import 'mocha';
import { assert } from 'chai';
import configTest from '../../../src/Resources/config/configTest';

describe('Config test', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (configTest) === 'object');
  });
});
