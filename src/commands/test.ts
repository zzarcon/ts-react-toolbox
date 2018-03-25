import * as path from 'path';
import {spawn} from 'child_process';
import {binPath} from '../utils';

export const test = async () => {
  const jestBin = binPath('jest');
  const configPath = path.resolve(__dirname, '../../jest.config.js');
  
  try {
    // TODO: default to --watch but spread other params if present
    const subprocess = spawn(jestBin, ['-c', configPath, '--watch'], {
      env: {...process.env, FORCE_COLOR: true},
      stdio: 'inherit'
    });

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};