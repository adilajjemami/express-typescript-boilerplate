import 'mocha';
import { assert } from 'chai';
import config from '../../../src/Resources/config/config';

describe('Config', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (config) === 'object');
  });

  it('config.parameters sould contain at least rootDir property', () => {
    assert.isTrue(typeof (config.parameters.rootDir) === 'string');
  });
});
