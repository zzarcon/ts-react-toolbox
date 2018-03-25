import * as path from 'path';
const {exec} = require('child_process');
// import {exec} from '../utils';
// const jestCli = require('jest-cli');

// export const test = () => {
//   const config = {
//     moduleFileExtensions: [
//       'ts',
//       'tsx',
//       'js'
//     ],
//     setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
//     transform: {
//       '^.+\\.(ts|tsx)$': '<rootDir>/preprocessor.js'
//     },
//     testMatch: [
//       '**/__tests__/*.(ts|tsx)'
//     ],
//     resetMocks: true
//   };
//   // console.log(jestCli)
//   jestCli.runCLI(config, [__dirname], () => {

//   });
// };

export const test = async () => {
  const configPath = path.resolve(__dirname, '../../jest.config.js');
  const command = `jest -c ${configPath}`;
  console.log('test', configPath);
  // await exec();

  try {
    const subprocess = exec(command, {
      env: {...process.env, FORCE_COLOR: true}
    });

    subprocess.stdout.pipe(process.stdout);
    subprocess.stderr.pipe(process.stdout);

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};