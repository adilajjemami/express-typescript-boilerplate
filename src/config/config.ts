import path from 'path';
import parameters from './parameters';
import services from './services';
import routing from './routing';
import middlewares from './middlewares';

const config: { [index: string]: any; } = {
  services,
  routing,
  middlewares,
  parameters: { ...parameters, ...{ rootDir: path.join(__dirname, '/../') } },
};

export default config;
