import path from 'path';

const services: { [index: string]: any; } = {
  fakeService: {
    className: 'FakeService',
    path: path.join(__dirname, '/../../Services/'),
    arguments: [],
  },
  helloService: {
    className: 'HelloService',
    path: path.join(__dirname, '/../../Services/'),
    arguments: ['@fakeService', '%rootDir%'],
  },

};

export default services;
