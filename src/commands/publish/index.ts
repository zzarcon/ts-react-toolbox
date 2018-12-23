import * as webpack from 'webpack';
import * as path from 'path';
// @ts-ignore
import * as ghpages from 'gh-pages';
import { green, exec, createWebpackConf } from '../../utils';

export const publish = async () => {
  green('Copying files 📂');

  const indexPath = path.resolve(__dirname, './index.html');
  const appPath = path.resolve(__dirname, '../../../../../');
  const distPath = `${appPath}/publish_dist`;
  const assetsPath = `${appPath}/example/assets`;

  await exec(`mkdir -p ${distPath}`);
  await exec(`cp ${indexPath} ${distPath}`);
  await exec(`cp -R ${assetsPath} ${distPath}`);

  green('Creating build 📦');

  const config = createWebpackConf({
    mode: 'production',
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
