import { green } from "../utils";
import { spawn } from "child_process";

export const release = async () => {
  // green('Creating new version tag 💥');
  // await exec('npm version patch');
  // green('Pushing tag ⛏');
  // await exec('git push --tags && git push');
  green('Publishing to the registry 📦');
  // await exec('npm publish');
  const child = spawn('yarn', ['publish', '--silent', '--new-version', 'patch'], {
    env: {...process.env, FORCE_COLOR: true}
  });

  child.stdout.on('data', (data) => {
    console.log(data);
  });
  
  child.stderr.on('data', (data) => {
    console.log(`Error: ${data}`);
  });
}