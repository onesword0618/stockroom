/**
 * Define common settings for bundles.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: path.resolve('src', 'index.ts'),
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, '/src/'),
    },
  },
};
