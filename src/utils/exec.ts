import { promisify } from 'util';
import * as childProcess from 'child_process';

export const exec = async (command: string) => {
  const execFunc = promisify(childProcess.exec);

  return execFunc(command);
};
