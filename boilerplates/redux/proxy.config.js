// More Examples: https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/webapi/*': 'http://1.1.1.1',

  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
};
