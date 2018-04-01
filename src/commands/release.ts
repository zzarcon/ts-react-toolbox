import { green, exec } from "../utils";
import { spawn } from "child_process";

const publish = () => (
  new Promise(resolve => {
    const log = (data: string) => console.log(`${data}`);
    const child = spawn('yarn', ['publish', '--silent', '--new-version', 'patch'], {
      env: {...process.env, FORCE_COLOR: true}
    });
  
    child.stdout.on('data', log);
    child.stderr.on('data', log);
    child.on('close', resolve);
  })
);

export const release = async () => {
  // TODO: run "prepublishOnly": "yarn test:ci && yarn build"

  green('Publishing to the registry 📦');
  await publish();

  green('Pushing tag ⛏');
  await exec('git push --tags && git push');
}