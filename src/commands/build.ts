import * as path from 'path';
import { spawn } from 'child_process';
import { binPath, green } from '../utils';

const tscBin = binPath('tsc');
const buildES5 = (): Promise<void> => {
  return new Promise((resolve) => {
    green('Creating ES5 dist 🌟');

    const configPath = path.resolve(__dirname, '../../tsconfig.es5.json');
    // NODE_ENV=production
    const subprocess = spawn(tscBin, ['-p', configPath], {
      env: { ...process.env, FORCE_COLOR: true },
      stdio: 'inherit'
    });

    subprocess.on('exit', resolve);
  });
};

const buildES2015 = () => {
  return new Promise((resolve) => {
    green('Creating ES2015 dist 🌟🌟');

    const configPath = path.resolve(__dirname, '../../tsconfig.es2015.json');
    const subprocess = spawn(tscBin, ['-p', configPath], {
      env: { ...process.env, FORCE_COLOR: true },
      stdio: 'inherit'
    });

    subprocess.on('exit', resolve);
  });
};

export const build = async () => {
  try {
    await buildES5();
    await buildES2015();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
