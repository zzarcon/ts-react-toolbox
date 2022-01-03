import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import { green, createWebpackConf } from '../utils';

const defaultEntry = './example/index.tsx';
const defaultPort = 8080;

export const dev = async (entry: string = defaultEntry) => {
  const port = parseInt(process.env.DEV_PORT || '', 10) || defaultPort;
  // const firewall = process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true';
  const webpackConfig = createWebpackConf({
    entry: [entry],
    output: {
      filename: 'example-bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      static: 'example',
      // firewall: false
    },
    stats: 'minimal',
    // externals: {
    //   fs: "fs",
    //   path: "path",
    //   crypto: "crypto"
    // }
  });
  const compiler = webpack(webpackConfig);
  const devServerConfig: WebpackDevServer.Configuration = {
    // quiet: true
    // stats: 'minimal',
    historyApiFallback: true,
    static: 'example',
    // disableHostCheck
  };
  const server = new WebpackDevServer(compiler, devServerConfig);

  server.listen(port, '0.0.0.0', () => {
    green(`Server listening => http://localhost:${port}/example 👀`);
  });
};
