/**
 * Define development environment settings for bundles.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
const commonConfig = require('./common.config.js');
const { merge } = require('webpack-merge');

const config = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    port: 3000,
  },
});

module.exports = config;
