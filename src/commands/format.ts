import { green, spawn, binPath } from '../utils';

export const format = async () => {
  green('Running Prettier 🥑');

  const prettier = binPath('prettier-eslint');

  // TODO: pass typescript parser https://github.com/eslint/typescript-eslint-parser
  await spawn(prettier, [
    'src/**/*.+(ts|tsx)',
    '--single-quote',
    '--write'
  ]);

  // node_modules/.bin/prettier --no-editorconfig --write
};
