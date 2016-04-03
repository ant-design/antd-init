module.exports = function(webpackConfig) {
  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  // remove common.js
  if (webpackConfig.plugins[0].chunkNames === 'common') {
    webpackConfig.plugins.shift();
  }

  return webpackConfig;
};
