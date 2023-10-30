import { green, spawn } from '../utils';

export const analyze = async () => {
  // const bundleAnalyzer = binPath('webpack-bundle-analyzer');
  // const webpack = binPath('webpack-cli');

  // green('Building project 🔨');
  await spawn('pnpm', ['build']);
  // TODO: run 'pnpm build' in the project root
  green('Generating webpack stats 📄');

  green('Running bundle size analyzer 🍔');

  // await spawn(bundleAnalyzer, [
  //   'stats.json'
  // ]);
};