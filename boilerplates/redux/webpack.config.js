// More Info: https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push(['antd', {style: 'css'}]);

  // Fix ie8 compatibility
  //webpackConfig.module.loaders.unshift({
  //  test: /\.jsx?$/,
  //  loader: 'es3ify-loader',
  //});

  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });

  return webpackConfig;
};
