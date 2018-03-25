import 'mocha';
import { assert } from 'chai';
import configDev from '../../../src/Resources/config/configDev';

describe('Config dev', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (configDev) === 'object');
  });
});
