import React, { Component, PropTypes } from 'react';
import { Table, Icon, Popconfirm, Modal } from 'antd';

import assign from 'object-assign';

import SearchForm from './SearchForm';
import EditModal from './EditModal';

import { getData, addItem, deleteItem, editItem } from '../../../services/tableList';

class TableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      modalVisible: false,
      currentItem: {},
      page: {
        total: 0,
        current: 0,
      },
    };

    this.pagination = {
      total: this.state.page.total,
      current: this.state.page.current,
      pageSize: 10,
      onChange: (current) => {
        this.setState({
          loading: true,
        });

        getData({ currentPage: current, pageSize: 10 }).then(({ jsonResult }) => {
          this.setState({
            data: jsonResult.data,
            page: jsonResult.page,
            loading: false,
          });
        })
      },
    };

    this.columns = [{
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
          <a onClick={this.handleOpenModal.bind(this, record)}>编辑</a>
          &nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={this.handleDelete.bind(this, record)}>
            <a>删除</a>
          </Popconfirm>
        </p>
      ),
    }];
  }

  componentDidMount() {
    getData({ currentPage: 1, pageSize: 10 }).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    })
  }

  handleSearch = (formData) => {
    this.setState({
      loading: true,
    });

    getData(formData).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
  }

  handleAdd = (formData) => {
    this.setState({
      loading: true,
    });

    addItem(formData).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
  }

  handleDelete = (record) => {
    this.setState({
      loading: true,
    });

    deleteItem(record).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
  }

  handleEdit = (formData) => {
    this.setState({
      loading: true,
      modalVisible: false,
    });

    editItem(formData).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        loading: false,
      });
    });
  }

  handleOpenModal = (record) => {
    this.setState({
      modalVisible: true,
      currentItem: { ...record },
    });
  }

  handleModalCancel = () => {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const { state, handleEdit, handleModalCancel } = this;

    // 解决 Form.create initialValue 的问题
    // 每次创建一个全新的组件, 而不做diff
    // 如果你使用了redux, 请移步 http://react-component.github.io/form/examples/redux.html
    const OneEditModal = () => {
      return <EditModal
        item={ state.currentItem }
        visible={ state.modalVisible }
        onOk={ handleEdit }
        onCancel={ handleModalCancel }
      />
    };

    this.pagination = assign(this.pagination, {
      total: this.state.page.total,
      current: this.state.page.current,
    });

    return <div style={{ margin: '20px' }}>
      <SearchForm onSearch={ this.handleSearch } onAdd={ this.handleAdd } />
      <Table
        columns={ this.columns }
        dataSource={ this.state.data }
        loading={ this.state.loading }
        pagination={ this.pagination }
      />
      <OneEditModal />
    </div>;
  }
}

export default TableList;
