import {Configuration} from 'webpack';

const defaultConfig = {
  mode: 'development',
  // context: __dirname,
  entry: ['./example/index.tsx'],
  output: {
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader' // TODO: pass own configFileName
      }
    ]
  }
} as any;

export const createWebpackConf = (config: Configuration) => {
  return {
    ...defaultConfig,
    ...config
  }
};