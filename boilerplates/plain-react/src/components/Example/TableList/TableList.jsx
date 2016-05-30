import React, { Component, PropTypes } from 'react';
import { Table, Icon } from 'antd';
import { getData } from '../../../services/tableList';

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
    <a href="#">操作一{ record.name }</a>
  ),
}];

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    getData({ page: 1 }).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        loading: false,
      });
    })
  }

  render() {
    return <div style={{ margin: '20px' }}>
      <Table columns={ columns } dataSource={ this.state.data } loading={ this.state.loading } />
    </div>
  }
}

export default TableList;
