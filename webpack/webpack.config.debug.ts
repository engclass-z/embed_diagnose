import path from 'path';

import { Configuration, WebpackOptionsNormalized } from 'webpack';

import base from './webpack.config.base';

const config: Configuration | Pick<WebpackOptionsNormalized, 'devServer'> = {
  ...base,
  entry: {
    index: path.resolve(__dirname, '../debug/index.ts'),
    'index.css': path.resolve(__dirname, '../debug/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, '../debug'),
    filename: '[name].js',
  },
};

export default config;
