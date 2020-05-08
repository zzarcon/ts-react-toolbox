import webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
// @ts-ignore
import * as ghpages from 'gh-pages';
import { green, exec, createWebpackConf } from '../../utils';

interface AppConfig {
  name: string;
}

const getAppConfig = (): AppConfig => {
  const appPath = path.resolve(__dirname, '../../../../../');
  try {
    return require(`${appPath}/toolbox-config.json`);
  } catch (e) {
    return {
      name: 'app'
    };
  }
}

const replaceHtmlPlaceholders = async (indexFilePath: string, appConfig: AppConfig) => {
  const readFile = promisify(fs.readFile);
  const writeFile = promisify(fs.writeFile);
  const fileContent = await readFile(indexFilePath, 'utf8');
  const replacedContent = fileContent.replace('{{TITLE}}', appConfig.name)

  await writeFile(indexFilePath, replacedContent);
}

export const publish = async () => {
  green('Copying files 📂');

  const appConfig = getAppConfig();
  const indexPath = path.resolve(__dirname, './index.html');
  const appPath = path.resolve(__dirname, '../../../../../');
  const distPath = `${appPath}/publish_dist`;
  const assetsPath = `${appPath}/example/assets`;
  const rootFilesPath = `${appPath}/example/root_files`;

  await exec(`mkdir -p ${distPath}`);
  await exec(`cp ${indexPath} ${distPath}`);
  await exec(`cp -R ${assetsPath} ${distPath}`);
  await exec(`cp -R ${rootFilesPath}/* ${distPath}`);

  replaceHtmlPlaceholders(`${distPath}/index.html`, appConfig);

  green('Creating build 📦');

  const config = createWebpackConf({
    mode: 'production',
    output: {
      path: distPath,
      filename: 'dist-bundle.js'
    }
  });
  const compiler = webpack(config);

  compiler.run((_: any, stats: any) => {
    console.log('hasErrors', stats.hasErrors());
    console.log(stats.toString());

    green('Publishing build 🚀');
    // TODO: pass debug flag => NODE_DEBUG=gh-pages
    ghpages.publish(
      distPath,
      {
        // repo: ''
      },
      async (err: Error) => {
        await exec(`rm -rf ${distPath}`);
        if (err) {
          console.log('gh-pages publish error', err);
        }
      }
    );
  });
};
