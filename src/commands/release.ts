import { green, exec } from "../utils";
import { spawn } from "child_process";

export const release = async () => {
  // TODO: run "prepublishOnly": "yarn test:ci && yarn build"

  green('Publishing to the registry 📦');
  
  const child = spawn('yarn', ['publish', '--silent', '--new-version', 'patch'], {
    env: {...process.env, FORCE_COLOR: true}
  });

  child.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.log(`${data}`);
  });

  green('Pushing tag ⛏');
  await exec('git push --tags && git push');
}