import * as webpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';
import {green} from '../utils';

const defaultEntry = './example/index.tsx';
const defaultPort = 8080;

export const dev = async (entry: string = defaultEntry) => {  
  const port = parseInt(process.env.DEV_PORT || '') || defaultPort;
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
    }
  } as any;
  const compiler = webpack(webpackConfig);
  const devServerConfig = {
    // quiet: true
    stats: 'minimal'
  } as any;
  const server = new webpackDevServer(compiler, devServerConfig);

  server.listen(port, '127.0.0.1', () => {
    green(`Server listening => http://localhost:${port}/example 👀`);
  });
};
