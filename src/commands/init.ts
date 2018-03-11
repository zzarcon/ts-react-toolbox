import {createFolder, createFile, copyFile} from '../utils';

export const init = async (projectName: string) => {
  const folders = ['./__tests__', './src', './example']
  
  await Promise.all(folders.map(createFolder));

  try {
    await copyFile('./static/preprocessor.js', 'preprocessor.js');
  } catch (err) {
    console.log(err)
  }
  

  console.log('init finish');
};