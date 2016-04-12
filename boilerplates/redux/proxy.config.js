// More Examples: https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/webapi/*': 'http://1.1.1.1',

  '/api/async_count': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: Math.floor(Math.random() * 2) === 1,
      });
    }, 500);
  },
};
