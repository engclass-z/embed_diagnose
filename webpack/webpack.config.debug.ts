import path from 'path';

import { Configuration, WebpackOptionsNormalized } from 'webpack';

import base from './webpack.config.base';

const config: Configuration | Pick<WebpackOptionsNormalized, 'devServer'> = {
  ...base,
  entry: path.resolve(__dirname, '../debug/index.ts'),
  output: {
    path: path.resolve(__dirname, '../debug'),
    filename: 'index.js',
  },
};

export default config;
