// More Info: https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('jsx-control-statements');
  return webpackConfig;
};
