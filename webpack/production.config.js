/**
 * Define production environment settings for bundles.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
const commonConfig = require('./common.config.js');
const { merge } = require('webpack-merge');

const config = merge(commonConfig, {
  mode: 'production',
});

module.exports = config;
