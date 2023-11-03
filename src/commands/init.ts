import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { exec, green } from '../utils';

const copyStatic = async () => {
  green('Copying files 📂');

  const staticPath = path.resolve(__dirname, '../../static');
  await exec(`cp -rfn ${staticPath}/ .`);
};

const modifyPackage = async () => {
  green('Modifing package ⛏');

  const writeFile = promisify(fs.writeFile);
  const pkgPath = path.resolve('./package.json');
  const pkg = require(pkgPath);
  // TODO: Add precommit config
  const newPkg = {
    ...pkg,
    engines: {
      node: '>=20.9.0'
    },
    scripts: {
      ...pkg.scripts,
      dev: 'ts-react-toolbox dev',
      test: 'ts-react-toolbox test',
      'test:ci': 'ts-react-toolbox test --runInBand --coverage', // TODO: better just ts-react-toolbox test:ci
      build: 'ts-react-toolbox build',
      release: 'ts-react-toolbox release',
      static: 'ts-react-toolbox publish'
    },
    peerDependencies: {
      react: '^18.2.0',
      'react-dom': '^18.2.0'
    },
    main: 'dist/es5/index.js',
    'jsnext:main': 'dist/es2015/index.js',
    module: 'dist/es2015/index.js',
    types: 'dist/es5/index.d.ts',
    files: ['dist'],
    keywords: pkg.keywords || [],
    repository: pkg.repository || ''
  };

  await writeFile(pkgPath, JSON.stringify(newPkg, null, 2));
};

const installGitHooks = async () => {
  // TODO: husky
};

export const init = async () => {
  try {
    await modifyPackage();
    await copyStatic();
    await installGitHooks();
    green('Project created 🚀');
  } catch (err) {
    console.log(err);
  }
};
