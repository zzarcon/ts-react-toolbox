import {Configuration} from 'webpack';

const defaultConfig = {
  mode: 'development', // TODO: we probably want to use prod build + source maps instead
  // context: __dirname,
  entry: ['./example/index.tsx'],
  output: {
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

export const createWebpackConf = (config: Configuration) => {
  return {
    ...defaultConfig,
    ...config
  }
};