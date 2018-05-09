// import * as path from 'path';
import { green, spawn, binPath } from '../utils';

export const format = async () => {
  const prettier = binPath('prettier-eslint');
  // const configPath = path.resolve(__dirname, '../../configs/tslint.json');

  green('Running Prettier 🥑');
  
  await spawn(prettier, [
    'src/**/*.+(ts|tsx)',
    '--write'
  ]);

  // node_modules/.bin/prettier --no-editorconfig --write
  // https://github.com/prettier/prettier-eslint-cli
};
