import { green, spawn, red } from '../utils';

export type VersionType = 'patch' | 'minor' | 'major';
export const release = async (version: VersionType = 'patch') => {
  green('Running testsuite 😇');
  await spawn('yarn', ['test:ci']);

  green('Creating dist 💪🏿');
  await spawn('yarn', ['build']);

  try {
    red('Publishing to the registry 📦');
    await spawn('yarn', ['publish', '--silent', '--new-version', version]);      
  } catch (e) {
    red(`Error publishing new version: ${e}`);
  }

  green('Pushing tag ⛏');
  await spawn('git', ['push', '--tags']);
  await spawn('git', ['push']);
};
