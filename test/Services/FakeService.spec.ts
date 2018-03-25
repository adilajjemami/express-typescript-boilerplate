import 'mocha';
import { assert } from 'chai';
import { FakeService } from '../../src/Services/FakeService';

describe('Fakeservice', () => {
  it('sayImFake() should return I\'m a fake service!', () => {
    const fakeService = new FakeService();
    assert.equal(fakeService.sayImFake(), 'I\'m a fake service!');
  });
});
