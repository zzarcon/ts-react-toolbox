import * as webpack from 'webpack';
import * as path from 'path';
import {green, exec} from '../../utils';

const defaultEntry = './example/index.tsx';

export const publish = async (entry: string = defaultEntry) => {
  // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages
  // https://github.com/tschaub/gh-pages

  green('Creating build 📦');

  const indexPath = path.resolve(__dirname, './index.html');
  const appPath = path.resolve(__dirname, '../../../../../');

  await exec(`mkdir ${appPath}/publish_dist`);

  await exec(`cp ${indexPath} ${appPath}`);
  // TODO: create helper to generate webpack config
  // TODO: create publish_dist folder if doesn't exist
  const webpackConfig = {
    mode: 'development', // TODO: we probably want to use prod build + source maps instead
    // context: __dirname,
    entry: [entry],
    output: {
      path: path.resolve(__dirname, '../../../../../publish_dist'),
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