import * as path from 'path';
import * as webpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';
// const webpackConfig =  require('../../webpack.config');

// console.log(webpackConfig)

import {exec} from '../utils';

const defaultEntry = './example/index.tsx';

export const dev = async (entry: string = defaultEntry) => {
  // const compiler = new webpack.Compiler();
  const webpackConfig = {
    // context: __dirname,
    entry: [entry],
    output: {
      filename: 'bundle.js'
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
  };
  const compiler = webpack(webpackConfig);
  const devServerConfig = {};

  const server = new webpackDevServer(compiler, devServerConfig);

  server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
  });

  // const binPath = path.resolve(__dirname, '../../node_modules/.bin/webpack-dev-server');
  // console.log(binPath)
  // try {
  //   console.log(1)
  //   // await exec(binPath);
  //   console.log(2)
  // } catch(e) {
  //   console.log('error')
  //   console.log(e)
  // }
  
};
