import { green, spawn } from "../utils";

export const release = async () => {
  green('Running testsuite 😇');
  await spawn('yarn', ['test:ci'])

  green('Creating dist 💪🏿');
  await spawn('yarn', ['build'])

  green('Publishing to the registry 📦');
  await spawn('yarn', ['publish', '--silent', '--new-version', 'patch']);

  green('Pushing tag ⛏');
  await spawn('git', ['push', '--tags']);
  await spawn('git', ['push']);
}