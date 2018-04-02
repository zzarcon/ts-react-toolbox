import * as webpack from 'webpack';
import * as path from 'path';
import {green, exec} from '../../utils';

const defaultEntry = './example/index.tsx';

export const publish = async (entry: string = defaultEntry) => {
  // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages
  // https://github.com/tschaub/gh-pages

  green('Copying files 📂');

  const indexPath = path.resolve(__dirname, './index.html');
  const appPath = path.resolve(__dirname, '../../../../../');
  const publishDist = `${appPath}/publish_dist`;

  await exec(`mkdir -p ${publishDist}`);
  await exec(`cp ${indexPath} ${publishDist}`);

  green('Creating build 📦');
  // TODO: create helper to generate webpack config
  const webpackConfig = {
    mode: 'development', // TODO: we probably want to use prod build + source maps instead
    // context: __dirname,
    entry: [entry],
    output: {
      path: publishDist,
      filename: 'dist-bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // devtool: 'cheap-source-map'
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    }
  } as any;
  const compiler = webpack(webpackConfig);
  compiler.run((err, stats) => {
    console.log('err', err);
    console.log('hasErrors', stats.hasErrors());
    console.log(stats.toString())
  });
};