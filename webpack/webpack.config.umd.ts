import path from 'path';

import { Configuration, WebpackOptionsNormalized } from 'webpack';

import base from './webpack.config.base';

const config: Configuration | Pick<WebpackOptionsNormalized, 'devServer'> = {
  ...base,
  mode: 'production',
  entry: {
    embed_diagnose: path.resolve(__dirname, '../src/index.ts'),
    'embed_diagnose.css': path.resolve(__dirname, '../src/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/umd'),
    filename: '[name].min.js',
    library: 'EmbedDiagnose',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};

export default config;
