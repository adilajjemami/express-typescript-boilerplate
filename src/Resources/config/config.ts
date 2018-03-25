import path from 'path';
import parameters from './parameters';
import services from './services';

const config: { [index: string]: any; } = {
  services,
  parameters: { ...parameters, ...{ rootDir: path.join(__dirname, '/../../') } },
};

export default config;
