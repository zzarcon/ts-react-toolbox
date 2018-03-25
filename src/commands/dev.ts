import * as path from 'path';
import * as webpackDevServer from 'webpack-dev-server';
import * as webpack from 'webpack';

const defaultEntry = './example/index.tsx';
const port = 8080;

export const dev = async (entry: string = defaultEntry) => {  
  const entryPath = path.resolve(__dirname, entry);
  console.log('dev', entryPath);
  const webpackConfig = {
    mode: 'development',
    // context: __dirname,
    entry: [entryPath],
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
  const compiler = webpack(webpackConfig as any);
  const devServerConfig = {};
  const server = new webpackDevServer(compiler, devServerConfig);

  server.listen(port, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${port}`);
  });
};
