import * as webpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';
import { green, createWebpackConf } from '../utils';

const defaultEntry = './example/index.tsx';
const defaultPort = 8080;

export const dev = async (entry: string = defaultEntry) => {
  const port = parseInt(process.env.DEV_PORT || '', 10) || defaultPort;
  const webpackConfig = createWebpackConf({
    entry: [entry],
    output: {
      filename: 'example-bundle.js'
    }
  });
  const compiler = webpack(webpackConfig);
  const devServerConfig = {
    // quiet: true
    stats: 'minimal'
  } as any;
  const server = new webpackDevServer(compiler, devServerConfig);

  server.listen(port, '0.0.0.0', () => {
    green(`Server listening => http://localhost:${port}/example 👀`);
  });
};
