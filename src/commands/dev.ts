import * as path from 'path';
import * as webpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';
import {green} from '../utils';
// import { CheckerPlugin } from 'awesome-typescript-loader';

const defaultEntry = './example/index.tsx';
const port = 8080;

export const dev = async (entry: string = defaultEntry) => {  
  const webpackConfig = {
    mode: 'development',
    // context: __dirname,
    entry: [entry],
    output: {
      filename: 'example-bundle.js'
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
    },
    // plugins: [
    //   new CheckerPlugin()
    // ]
  };
  const compiler = webpack(webpackConfig as any);
  const devServerConfig = {
    quiet: true
  };
  const server = new webpackDevServer(compiler, devServerConfig);

  server.listen(port, '127.0.0.1', () => {
    green(`Server listening => http://localhost:${port} 👀`);
  });
};
