import {exists, mkdir} from 'fs';
import {promisify} from 'util';

export const init = async (projectName: string) => {
  console.log(projectName)
  exists('./__tests__', (exists) => {
    console.log('exists', exists);
    mkdir('__tests__', (err) => {
      console.log('err', err)
    });
  });
};