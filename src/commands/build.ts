import * as path from 'path';
import { spawn } from 'child_process';
import { binPath, green } from '../utils';

export const build = () => {
  green('Building project using Typescript 👑');
  const tscBin = binPath('tsc');
  const configPath = path.resolve(__dirname, '../../tsconfig.prod.json');
  // NODE_ENV=production

  try {
    const subprocess = spawn(tscBin, ['-p', configPath], {
      env: { ...process.env, FORCE_COLOR: true },
      stdio: 'inherit'
    });

    subprocess.on('exit', (code: number) => process.exit(code));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
