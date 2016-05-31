// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义
'use strict';

var qs = require('qs');

// 数据持久
var tableListData = {};
if (!global._o_x_tableListData) {

  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: '胡彦斌' + i,
      age: 32,
      address: '西湖区湖底公园' + i + '号',
    });
  }

  tableListData = {
    data: data,
    page: {
      total: data.length,
      current: 1,
    }
  };

  global._o_x_tableListData = tableListData;

} else {

  tableListData = global._o_x_tableListData;

}

module.exports = {

  '/api/todos': function (req, res) {
    setTimeout(function () {
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

  '/api/tablelist': function (req, res) {

    var page = qs.parse(req.body);
    var pageSize = page.pageSize || 10;

    var data = tableListData.data.slice((page.currentPage - 1) * pageSize, page.currentPage * pageSize);

    tableListData.page.current = page.currentPage*1;

    setTimeout(function () {
      res.json({
        success: true,
        data: data,
        page: tableListData.page,
      });
    }, 500);
  },

  '/api/tablelist_addItem': function (req, res) {
    setTimeout(function () {
      var newData = qs.parse(req.body);

      newData.key = tableListData.data.length + 1;
      tableListData.data.push(newData);

      tableListData.page.total = tableListData.data.length;

      global._o_x_tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);

  },

  '/api/tablelist_deleteItem': function (req, res) {
    setTimeout(function () {
      var deleteItem = qs.parse(req.body);

      tableListData.data = tableListData.data.filter(function (item) {
        if (item.key == deleteItem.key) {
          return false;
        }
        return true;
      });

      tableListData.page.total = tableListData.data.length;

      global._o_x_tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);
  },

  '/api/tablelist_editItem': function (req, res) {
    setTimeout(function () {
      var editItem = qs.parse(req.body);

      tableListData.data = tableListData.data.map(function (item) {
        if (item.key == editItem.key) {
          return editItem;
        }
        return item;
      });

      global._o_x_tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);
  },

};
