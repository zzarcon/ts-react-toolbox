import * as path from 'path';
import { spawn } from 'child_process';
import { binPath } from '../utils';
import { checkFileExists } from '../utils/checkFileExists';

const defaultArgs = ['--watch'];

export const test = async (args: string[] = defaultArgs) => {
  const jestBin = binPath('jest');

  const upperJestPath = '../../../../jest.config.js';
  const defaultJestPath = '../../jest.config.js';
  const pathString = checkFileExists(upperJestPath)
    ? upperJestPath
    : defaultJestPath;
  const configPath = path.resolve(__dirname, pathString);

  try {
    const subprocess = spawn(jestBin, ['-c', configPath, ...args], {
      env: { ...process.env, FORCE_COLOR: "true" },
      stdio: 'inherit'
    });

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
