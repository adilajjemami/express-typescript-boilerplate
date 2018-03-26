import 'mocha';
import { assert } from 'chai';
import { GlobalMessage } from '../../src/Utils/GlobalMessage';

describe('GlobalMessage', () => {
  it('init() should init errors messages', () => {
    GlobalMessage.init();
    assert.isTrue(true);
  });

  it('getError("pageNotFound") should return pageNotFound object', () => {
    GlobalMessage.init();
    const error = GlobalMessage.getError('pageNotFound');
    assert.equal(error.errorCode, 'pageNotFound');
    assert.equal(error.errorDescription, 'Page not found.');
    assert.equal(error.status, 404);
  });
});
