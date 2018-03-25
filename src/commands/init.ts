import * as path from 'path';
import * as fs from 'fs';
import {promisify} from 'util';
import {exec, green} from '../utils';

const copyStatic = async () => {
  green('Copying files 📂');

  const staticPath = path.resolve(__dirname, '../../static');
  await exec(`cp -rf ${staticPath}/* .`);
};

const modifyPackage = async () => {
  green('Modifing package ⛏');
  
  const writeFile = promisify(fs.writeFile);
  const pkgPath = path.resolve('./package.json');
  const pkg = require(pkgPath);

  pkg.engines = {
    node: '^8.5.0'
  };
  
  pkg.scripts = {
    start: 'webpack -w',
    dev: 'ts-react-toolbox dev',
    test: 'ts-react-toolbox test',
    'test:ci': 'jest --runInBand --coverage',
    build: 'NODE_ENV=production tsc -p ./tsconfig.prod.json',
    release: 'npm version patch && git push --tags && git push && npm publish',
    prepublishOnly: 'yarn test:ci && yarn build'
  };

  pkg.peerDependencies = {
    'react': '^16.2.0'
  };

  // TODO: Add "files"

  await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
};

export const init = async (projectName: string) => {
  try {
    await modifyPackage();
    await copyStatic();
  } catch (err) {
    console.log(err)
  }
  
  green('Project created 🚀');
};