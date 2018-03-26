import http from 'http';
import { Server } from './Server';

const index: { [index: string]: any; } = {};

Server.bootstrap()
.then((s) => {
  const app = s.getApp();
  index.getPort = s.getPort;
  index.httpServer = http.createServer(app);
  index.httpServer.listen(index.getPort());
});

export default index;
