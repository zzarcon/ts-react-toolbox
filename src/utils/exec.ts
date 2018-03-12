import {promisify} from 'util';
import * as childProcess from 'child_process';

export const exec = async (command: string) => {
  const exec = promisify(childProcess.exec);

  return exec(command);
};