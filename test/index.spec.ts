import 'mocha';
import { assert } from 'chai';
import supertest from 'supertest';
import index from '../src/index';
import { Core } from '../src/Core/Core';

describe('index', () => {
  it('start server', (done) => {
    index.httpServer
    .close();
    done();
  });
});
