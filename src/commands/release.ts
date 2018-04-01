import { green, exec } from "../utils";

export const release = async () => {
  // green('Creating new version tag 💥');
  // await exec('npm version patch');
  // green('Pushing tag ⛏');
  // await exec('git push --tags && git push');
  green('Publishing to the registry 📦');
  // await exec('npm publish');
  await exec('yarn publish --silent --new-version patch');
}