// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义
'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

// 数据持久
let tableListData = {};
if (!global.tableListData) {

  const data = mockjs.mock({
    'data|100': [{
      'key|+1': 1,
      name: '@cname',
      'age|11-99': 1,
      address: '@region',
    }],
    page: {
      total: 100,
      current: 1,
    },
  });

  tableListData = data;

  global.tableListData = tableListData;

} else {

  tableListData = global.tableListData;

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

    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.currentPage || 1;

    let data = tableListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    tableListData.page.current = currentPage * 1;

    if (page.field) {
      data = data.filter(function(item) {
        return item[page.field].indexOf(page.keyword) > -1;
      });
    }

    setTimeout(function () {
      res.json({
        success: true,
        data: data,
        page: tableListData.page,
      });
    }, 300);
  },

  '/api/tablelist/create': function (req, res) {
    setTimeout(function () {
      const newData = qs.parse(req.body);

      newData.key = tableListData.data.length + 1;
      tableListData.data.unshift(newData);

      tableListData.page.total = tableListData.data.length;

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);

  },

  '/api/tablelist/delete': function (req, res) {
    setTimeout(function () {
      const deleteItem = qs.parse(req.body);

      tableListData.data = tableListData.data.filter(function (item) {
        if (item.key == deleteItem.key) {
          return false;
        }
        return true;
      });

      tableListData.page.total = tableListData.data.length;

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);
  },

  '/api/tablelist/edit': function (req, res) {
    setTimeout(function () {
      const editItem = qs.parse(req.body);

      tableListData.data = tableListData.data.map(function (item) {
        if (item.key == editItem.key) {
          return editItem;
        }
        return item;
      });

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 500);
  },

};
