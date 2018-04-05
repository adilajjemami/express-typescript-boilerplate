import 'mocha';
import { assert } from 'chai';
import sinon, { SinonSandbox } from 'sinon';
import { ApiError } from '../../src/Utils/ApiError';
import { GlobalMessage } from '../../src/Utils/GlobalMessage';
import { Request, Response } from 'express';
import { ErrorMiddleware } from '../../src/Middlewares/ErrorMiddleware';


describe('ErrorMiddleware', () => {
  let errorMiddlware: ErrorMiddleware;
  const res = <Response>{ status: (code: number) => { }, json: (body ?: any) => { return body; } };
  let sandbox: SinonSandbox;

  GlobalMessage.init();

  beforeEach((done) => {
    try {
      sandbox = sinon.sandbox.create();
      sandbox.stub(res, 'status').returns(res);
      errorMiddlware = new ErrorMiddleware();
      done();
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('handle should return a json response with pageNotFound error', (done) => {
    try {
      errorMiddlware.handle(new ApiError('pageNotFound'), <Request>{}, res, () => {});
      done();
    } catch (error) {
      done(error);
    }
  });
  it('handle should return a json response with internalError error', (done) => {
    try {
      errorMiddlware.handle(new Error('internalError'), <Request>{}, res, () => {});
      done();
    } catch (error) {
      done(error);
    }
  });
});
