import 'mocha';
import { assert } from 'chai';
import { ApiError } from '../../src/Utils/ApiError';
import { GlobalMessage } from '../../src/Utils/GlobalMessage';

describe('ApiError', () => {
  it('constructor("pageNotFound") should use GlobalMessage to get the error', () => {
    GlobalMessage.init();
    const apiError = new ApiError('pageNotFound');
    assert.equal(apiError.getErrorCode(), 'pageNotFound');
    assert.equal(apiError.getErrorDescription(), 'Page not found.');
    assert.equal(apiError.getStatus(), 404);
  });
});
