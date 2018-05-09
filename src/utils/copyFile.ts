import * as fs from 'fs';

export const copyFile = async (src: string, dest: string) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(src, dest, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};
