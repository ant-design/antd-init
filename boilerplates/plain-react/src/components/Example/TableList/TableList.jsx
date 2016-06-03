import React, { Component, PropTypes } from 'react';
import { Table, Icon, Popconfirm, Modal, message } from 'antd';

const TableList  = ({ pagination, loading, dataSource, onShowEditModal, onDelete }) => {

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{ text }</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={onShowEditModal.bind(this, record)}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={onDelete.bind(this, record)}>
          <a>删除</a>
        </Popconfirm>
      </p>
    ),
  }];

  return <Table
    columns={ columns }
    dataSource={ dataSource }
    loading={ loading }
    pagination={ pagination }
  />;

};

export default TableList;
