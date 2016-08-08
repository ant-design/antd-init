// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['antd', {
    style: 'css',  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  return webpackConfig;
};
