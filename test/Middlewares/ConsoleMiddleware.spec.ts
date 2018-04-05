import 'mocha';
import { assert } from 'chai';
import { Request, Response } from 'express';
import { ConsoleMiddleware } from '../../src/Middlewares/ConsoleMiddleware';

describe('ErrorMiddleware', () => {

  it('handle should return a json response with pageNotFound error', (done) => {
    try {
      const consoleMiddlware = new ConsoleMiddleware();
      consoleMiddlware.handle(<Request>{}, <Response>{}, () => {});
      done();
    } catch (error) {
      done(error);
    }
  });

});
