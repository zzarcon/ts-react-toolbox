import * as path from 'path';
import { spawn } from 'child_process';
import { binPath } from '../utils';

const defaultArgs = ['--watch'];

export const test = async (args: string[] = defaultArgs) => {
  const jestBin = binPath('jest');
  const configPath = path.resolve(__dirname, '../../jest.config.js');

  try {
    const subprocess = spawn(jestBin, ['-c', configPath, ...args], {
      env: { ...process.env, FORCE_COLOR: true },
      stdio: 'inherit'
    });

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
