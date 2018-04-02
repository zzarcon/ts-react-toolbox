import * as webpack from 'webpack';
import {green} from '../utils';

const defaultEntry = './example/index.tsx';

export const publish = async (entry: string = defaultEntry) => {
  // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages
  // https://github.com/tschaub/gh-pages

  green('Creating build 📦');
  const webpackConfig = {
    mode: 'development',
    // context: __dirname,
    entry: [entry],
    output: {
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