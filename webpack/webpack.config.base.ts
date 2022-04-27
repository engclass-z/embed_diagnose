import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, WebpackOptionsNormalized } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const config: Configuration | Pick<WebpackOptionsNormalized, 'devServer'> = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.ts'),
    'index.css': path.resolve(__dirname, '../src/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../debug'),
    },
    port: 9876,
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: './[name]',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

export default config;
