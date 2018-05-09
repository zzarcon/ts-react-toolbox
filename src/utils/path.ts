import { resolve } from 'path';

export const binPath = (binName: string) =>
  resolve(__dirname, `../../node_modules/.bin/${binName}`);
