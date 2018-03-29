import 'mocha';
import { assert } from 'chai';
import supertest from 'supertest';
import http from 'http';
import { Server } from '../../src/Server';

describe('HelloController', async () => {
  const s = await Server.bootstrap();
  let httpServer;

  beforeEach(async () => {
    httpServer = http.createServer(s.getApp());
  });

  after(async () => {
    httpServer.close();
  });

  it('GET / should return a fake message', async () => {
    try {
      supertest(httpServer)
        .get('/')
        .end((err, res) => {
          if (err) {
            throw err;
          }
          assert.equal(
            res.body.message,
            'Hello world! I\'m a fake service! Injected in a fake controller!',
          );
        });
    } catch (err) {
      throw err;
    }
  });

  it('POST /hello should return a fake message with posted name', async () => {
    try {
      supertest(httpServer)
        .post('/hello')
        .type('json')
        .send({
          name: 'John DOE',
        })
        .end((err, res) => {
          if (err) {
            throw err;
          }
          assert.equal(
            res.body.message,
            'Hello John DOE! POST!',
          );
        });
    } catch (err) {
      throw err;
    }
  });

  it('PUT /hello should return a fake message with posted name', async () => {
    try {
      supertest(httpServer)
        .put('/hello')
        .type('json')
        .send({
          name: 'John DOE',
        })
        .end((err, res) => {
          if (err) {
            throw err;
          }
          assert.equal(
            res.body.message,
            'Hello John DOE! PUT!',
          );
        });
    } catch (err) {
      throw err;
    }
  });

  it('DELETE /hello should return a fake message with posted name', async () => {
    try {
      supertest(httpServer)
        .delete('/hello')
        .type('json')
        .send({
          name: 'John DOE',
        })
        .end((err, res) => {
          if (err) {
            throw err;
          }
          assert.equal(
            res.body.message,
            'Hello John DOE! DELETE!',
          );
        });
    } catch (err) {
      throw err;
    }
  });
});
