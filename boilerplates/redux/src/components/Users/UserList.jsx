import React, { Component, PropTypes } from 'react';
import { Table, Icon, Popconfirm, Modal, Pagination, message } from 'antd';

function UserList({
  onPageChange, total, current, loading, dataSource, onShowEditModal, onDelete
}) {

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

  return (
    <div>
      <Table
        columns={ columns }
        dataSource={ dataSource }
        loading={ loading }
        rowKey={record => record.id}
        pagination={ false }
      />
      <Pagination
        className="ant-table-pagination"
        total={ total }
        current={ current }
        pageSize={ 10 }
        onChange={ onPageChange }
      />
    </div>
  );

}

export default UserList;
