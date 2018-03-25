import * as path from 'path';
import {exec, spawn} from 'child_process';
import {binPath} from '../utils';

export const test = async () => {
  const jestBin = binPath('jest');
  const configPath = path.resolve(__dirname, '../../jest.config.js');
  // const command = `${jestBin} -c ${configPath}`;
  
  try {
    // TODO: default to --watch but spread other params if present
    const subprocess = spawn(jestBin, ['-c', configPath, '--watch'], {
      env: {...process.env, FORCE_COLOR: true},
      stdio: 'inherit'
    });

    // subprocess.stdin.pipe(process.stdin);
    // subprocess.stdout.pipe(process.stdout);
    // subprocess.stderr.pipe(process.stdout);


    // process.stdout.on('data', (data) => {
    //   console.log('subprocess stdout data', data)
    // });

    // process.stdin.on('data', (data) => {
    //   console.log('subprocess stdin data', data)
    // });

    // process.stdout.on('message', (message) => {
    //   console.log('subprocess stdout message', message)
    // });

    // process.stdin.on('message', (message) => {
    //   console.log('subprocess stdin message', message)
    // });

    // process.on('message', (message) => {
    //   console.log('message', message)
    // });

    // process.on('data', (data) => {
    //   console.log('data', data)
    // });

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};