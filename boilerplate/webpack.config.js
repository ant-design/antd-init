
module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('antd');
  return webpackConfig;
};
