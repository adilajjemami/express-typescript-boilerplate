import 'mocha';
import { assert } from 'chai';
import rewire from 'rewire';
import path from 'path';
import { Core } from '../../src/Core/Core';
import { HelloService } from '../../src/Services/HelloService';

describe('BaseController', () => {
  const BaseController = rewire('../../src/Controller/BaseController').BaseController;
  it('getParameter("rootDir") should return projects rootDir', (done) => {
    Core.bootstrap()
      .then(() => {
        const bc = new BaseController();
        assert.equal(
          bc.getParameter('rootDir'),
          path.join(__dirname, '../../src/'),
        );
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('getService("helloService") should return helloService instance', (done) => {
    Core.bootstrap()
      .then(() => {
        const bc = new BaseController();
        assert.isTrue(bc.getService('helloService') instanceof HelloService);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
