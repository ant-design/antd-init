// More Info: https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push(['antd', {style: true}]);

  // Fix ie8 compatibility
  //webpackConfig.module.loaders.unshift({
  //  test: /\.jsx?$/,
  //  loader: 'es3ify-loader',
  //});

  return webpackConfig;
};
