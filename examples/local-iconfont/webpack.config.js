module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
  }]);
  return webpackConfig;
};
