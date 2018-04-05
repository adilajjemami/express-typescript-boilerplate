import 'mocha';
import { assert } from 'chai';
import { Request, Response } from 'express';
import { ConsoleMiddleware } from '../../src/Middlewares/ConsoleMiddleware';

describe('ConsoleMiddleware', () => {

  it('handle should log request object', (done) => {
    try {
      const consoleMiddlware = new ConsoleMiddleware();
      consoleMiddlware.handle(<Request>{}, <Response>{}, () => {});
      done();
    } catch (error) {
      done(error);
    }
  });

});
