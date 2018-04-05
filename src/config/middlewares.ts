const middlewares: { [index: string]: any; } = {
  errorMiddleware: {
    className: 'ErrorMiddleware',
    path: 'rootDir/Middlewares/',
    arguments: [],
    global: true,
  },
  consoleMiddleware: {
    className: 'ConsoleMiddleware',
    path: 'rootDir/Middlewares/',
    arguments: [],
  },
};

export default middlewares;
