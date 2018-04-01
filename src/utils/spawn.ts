import { spawn as nativeSpawn } from "child_process";

const log = (data: string) => console.log(`${data}`);

export const spawn = (command: string, args: string[]) => (
  new Promise((resolve, reject) => {
    const child = nativeSpawn(command, args, {
      env: {...process.env, FORCE_COLOR: true}
    });
  
    child.stdout.on('data', log);
    child.stderr.on('data', log);
    child.on('close', (code) => {
      if (code !== 0) {
        reject();
      }
      
      resolve();
    });
  })
);
