import { green, spawn, red } from '../utils';

export type VersionType = 'patch' | 'minor' | 'major';
export const release = async (version: VersionType = 'patch') => {
  green('Running testsuite 😇');
  await spawn('pnpm', ['test:ci']);

  green('Creating dist 💪🏿');
  await spawn('pnpm', ['build']);

  // TODO: move pnpm publish to the end
  try {
    green('Publishing to the registry 📦');
    await spawn('pnpm', ['publish', '--silent', '--new-version', version], {stdio: 'inherit'});      
  } catch (e) {
    red(`Error publishing new version: ${e}`);
  }

  green('Pushing tag ⛏');
  await spawn('git', ['push', '--tags']);
  await spawn('git', ['push']);
};
