import * as path from 'path';
import { green, spawn, binPath } from '../utils';

export const format = async () => {
  const prettier = binPath('prettier-eslint');
  const configPath = path.resolve(__dirname, '../../configs/prettier.config.js');

  green('Running Prettier 🥑');
  
  // TODO: pass config path or options

  await spawn(prettier, [
    'src/**/*.+(ts|tsx)',
    '--write',
    '--config',
    configPath
  ]);

  // node_modules/.bin/prettier --no-editorconfig --write
  // https://github.com/prettier/prettier-eslint-cli
};
