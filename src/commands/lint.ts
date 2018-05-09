import * as path from 'path';
import { green, spawn, binPath } from "../utils";

export const lint = async () => {
  const tslint = binPath('tslint');
  const configPath = path.resolve(__dirname, '../../configs/tslint.json');

  // TODO: we want to first run // node_modules/.bin/tslint-config-prettier-check ./tslint.json

  green('Running TSLint 🌯');
  await spawn(tslint, ['-c', configPath, '-p', '.', '--format', 'stylish']);

  // https://github.com/okonet/lint-staged#configuration
  // lint-staged.config.js --config
  // lint-staged 
  // 1- configure tslint
  // 2- configure prettier
  // tslint-config-prettier
  // 3- https://github.com/alexjoverm/tslint-config-prettier

  // node_modules/.bin/prettier --no-editorconfig --write
};