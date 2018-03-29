const middlewares: { [index: string]: any; } = {
  errorMiddleware: {
    className: 'ErrorMiddleware',
    path: 'rootDir/Middlewares/',
    arguments: [],
    global: true,
  },
};

export default middlewares;
