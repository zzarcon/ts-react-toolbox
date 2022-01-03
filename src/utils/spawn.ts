import { spawn as nativeSpawn, SpawnOptions, ChildProcess } from 'child_process';

const log = (data: string) => console.log(`${data}`);

export const spawn = (command: string, args: string[], options?: SpawnOptions): Promise<ChildProcess> =>
  new Promise((resolve, reject) => {
    const child = nativeSpawn(command, args, {
      ...options,
      env: { ...process.env, FORCE_COLOR: "true" }
    });

    child.stdout!.on('data', log);
    child.stderr!.on('data', log);
    child.on('close', code => {
      if (code !== 0) {
        reject();
      }

      resolve(child);
    });
  });
