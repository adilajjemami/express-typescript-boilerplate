import 'mocha';
import { assert } from 'chai';
import http from 'http';
import supertest from 'supertest';
import { Server } from '../../src/Server';

describe('HelloController', () => {
  it('GET / should return a fake message', (done) => {
    Server.bootstrap()
      .then((s) => {
        const app = s.getApp();
        const httpServer = http.createServer(app);
        //httpServer.listen(3000);
        supertest(httpServer)
          .get('/')
          .expect(200)
          .end((err, res) => {
            httpServer.close();
            if (err) {
              done(err);
            }
            assert.isDefined(res.body);
            done();
          });
      })
      .catch((err) => {
        done(err);
      });
  });
});
