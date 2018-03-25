const services: { [index: string]: any; } = {
  fakeService: {
    className: 'FakeService',
    path: 'rootDir/Services/',
    arguments: [],
  },
  helloService: {
    className: 'HelloService',
    path: 'rootDir/Services/',
    arguments: ['@fakeService', '%rootDir%'],
  },
};

export default services;
