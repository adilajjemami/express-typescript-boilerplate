import path from 'path';
import parameters from './parameters';
import services from './services';
import routing from './routing';

const config: { [index: string]: any; } = {
  services,
  routing,
  parameters: { ...parameters, ...{ rootDir: path.join(__dirname, '/../') } },
};

export default config;
