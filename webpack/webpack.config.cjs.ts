import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, WebpackOptionsNormalized } from 'webpack';

import base from './webpack.config.base';

const config: Configuration | Pick<WebpackOptionsNormalized, 'devServer'> = {
  ...base,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/cjs'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: '../tsconfig.cjs.json',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};

export default config;
