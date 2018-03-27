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

  // it('POST /hello should return a fake message with param', (done) => {
  //   Server.bootstrap()
  //     .then((s) => {
  //       const app = s.getApp();
  //       const httpServer = http.createServer(app);
  //       supertest(httpServer)
  //         .post('/hello')
  //         .set('Content-Type', 'application/json')
  //         .set('Accept', 'application/json')
  //         .send({ name: 'Adil' })
  //         .expect(200)
  //         .end((err, res) => {
  //           httpServer.close();
  //           console.log(res.text);
  //           if (err) {
  //             console.log(err);
  //             done(err);
  //           } else {
  //             console.log(res.body);
  //             assert.isDefined(res.body);
  //             done();
  //           }
  //         });
  //     });
  // });
});
