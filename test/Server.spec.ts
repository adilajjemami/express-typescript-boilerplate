import 'mocha';
import { assert } from 'chai';
import http from 'http';
import supertest from 'supertest';
import { Server } from '../src/Server';

describe('Server', () => {
  it('bootstrap() should return a new Server instance', (done) => {
    Server.bootstrap()
    .then((s) => {
      assert.isTrue(s instanceof Server);
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('getPort() should return 3000 by default', (done) => {
    Server.bootstrap()
      .then((s) => {
        assert.equal(s.getPort(), 3000);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('getPort() should return 4000 when NODE_PORT=4000', (done) => {
    Server.bootstrap()
      .then((s) => {
        process.env.NODE_PORT = '4000';
        assert.equal(s.getPort(), 4000);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('GET /apinowhere should return 404', (done) => {
    Server.bootstrap()
      .then((s) => {
        const app = s.getApp();
        const httpServer = http.createServer(app);
        httpServer.listen(3000);
        supertest(httpServer)
          .get('/apinowhere')
          .expect(404)
          .end((err, res) => {
            httpServer.close();
            if (err) {
              return done(err);
            }
            done();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('getApp() should return a express.Application instance', (done) => {
    Server.bootstrap()
      .then((s) => {
        assert.isDefined(s.getApp());
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
