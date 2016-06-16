// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

const mock = {};

require('fs').readdirSync(require('path').join(__dirname + '/mock'))
  .forEach(function (file) {
    Object.assign(mock, require('./mock/' + file));
  });

module.exports = mock;
