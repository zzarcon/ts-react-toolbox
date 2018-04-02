import * as webpack from 'webpack';
import * as path from 'path';
import * as ghpages from 'gh-pages';
import {green, exec, createWebpackConf } from '../../utils';

export const publish = async () => {
  green('Copying files 📂');

  const indexPath = path.resolve(__dirname, './index.html');
  const appPath = path.resolve(__dirname, '../../../../../');
  const distPath = `${appPath}/publish_dist`;

  await exec(`mkdir -p ${distPath}`);
  await exec(`cp ${indexPath} ${distPath}`);

  green('Creating build 📦');

  const config = createWebpackConf({
    output: {
      path: distPath,
      filename: 'dist-bundle.js'
    }
  });
  const compiler = webpack(config);

  compiler.run((_, stats) => {
    console.log('hasErrors', stats.hasErrors());
    console.log(stats.toString());

    green('Publishing build 🚀');

    ghpages.publish(distPath, {
      repo: 'git@github.com:zzarcon/react-progressive-img.git' // TODO: resolve right path
    }, (err: Error) => {
      if (err) {
        console.log('gh-pages publish error', err);
      }
    });
  });
};