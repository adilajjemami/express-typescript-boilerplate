import path from 'path';
import parameters from './parameters';

const config: { [index: string]: any; } = {
  parameters: { ...parameters, ...{ rootDir: path.join(__dirname, '/../../') } },
};

export default config;
