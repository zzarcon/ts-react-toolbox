import { existsSync } from "fs";
import path from 'path';

export const checkFileExists = (resolutionPath: string) => {
  if (existsSync(path.resolve(__dirname, resolutionPath))) {
    return true;
  }
  return false;
};
