import 'mocha';
import { assert } from 'chai';
import configProd from '../../../src/Resources/config/configProd';

describe('Config prod', () => {
  it('should be an object', () => {
    assert.isTrue(typeof (configProd) === 'object');
  });
});
