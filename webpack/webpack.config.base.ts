import path from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, WebpackOptionsNormalized } from 'webpack';

const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

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
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: './[name]',
    }),
  ],
};

export default config;
