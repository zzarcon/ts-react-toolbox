import {promisify} from 'util';
import * as fs from 'fs';

export const createFile = async (path: string, data: string) => {
  const exists = promisify(fs.exists);
  const writeFile = promisify(fs.writeFile);

  if (!await exists(path)) {
    return writeFile(path, data);
  }
};