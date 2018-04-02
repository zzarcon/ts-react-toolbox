import * as path from 'path';
import * as fs from 'fs';
import {promisify} from 'util';
import {exec, green} from '../utils';

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
      node: '^8.5.0'
    },
    scripts: {
      ...pkg.scripts,
      bootstrap: 'ts-react-toolbox init', // Calling it "init" will conflict with default "yarn init" command
      dev: 'ts-react-toolbox dev',
      test: 'ts-react-toolbox test',
      'test:ci': 'ts-react-toolbox test --runInBand --coverage', //TODO: better just ts-react-toolbox test:ci
      build: 'ts-react-toolbox build',
      release: 'ts-react-toolbox release',
      lint: 'ts-react-toolbox lint', // TODO: implement
      publish: 'ts-react-toolbox publish'
    },
    peerDependencies: {
      react: '^16.2.0'
    },
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    files: ['dist']
  }; 

  await writeFile(pkgPath, JSON.stringify(newPkg, null, 2));
};

export const init = async () => {
  try {
    await modifyPackage();
    await copyStatic();
    green('Project created 🚀');
  } catch (err) {
    console.log(err)
  }
};