import * as path from 'path';
const {exec} = require('child_process');
import {binPath} from '../utils';
// const jestCli = require('jest-cli');
//   jestCli.runCLI(config, [__dirname], () => {

//   });

export const test = async () => {
  const jestBin = binPath('jest');
  const configPath = path.resolve(__dirname, '../../jest.config.js');
  const command = `${jestBin} -c ${configPath}`;
  console.log('test', command);
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