import * as fs from 'fs';
import { promisify } from 'util';

export const createFolder = async (path: string) => {
  const exists = promisify(fs.exists);
  const mkdir = promisify(fs.mkdir);
  const existsFolder = await exists(path);

  if (!existsFolder) {
    return mkdir(path);
  }
};
