import React, { Component, PropTypes } from 'react';
import { message } from 'antd';
import SearchForm from './SearchForm';
import TableItemModal from './TableItemModal';
import TableList from './TableList';
import { getData, addItem, deleteItem, editItem } from '../../../services/tableList';
import styles from './TableListContainer.less';

class TableListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      modalVisible: false,
      modalType: 'create',
      currentItem: {},
      page: {
        total: 0,
        current: 0,
      },
    };
  }

  componentWillMount() {
    getData({
      currentPage: 1,
      pageSize: 10,
    }).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
  }

  handlePageChange = (currentPage) => {
    getData({
      currentPage,
    }).then(({ jsonResult }) => {
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
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

  handleDelete = (record) => {
    this.setState({
      loading: true,
    });

    deleteItem(record).then(({ jsonResult }) => {
      message.success('删除成功');
      this.setState({
        data: jsonResult.data,
        page: jsonResult.page,
        loading: false,
      });
    });
  }

  handleCreate = (formData) => {
    this.setState({
      loading: true,
      modalVisible: false,
    });

    addItem(formData).then(({ jsonResult }) => {
      message.success('添加成功');
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
      message.success('编辑成功');
      this.setState({
        data: jsonResult.data,
        loading: false,
      });
    });
  }

  handleModalHide = () => {
    this.setState({
      modalVisible: false,
    });
  }

  handleModalShow = (modalType, currentItem) => {
    this.setState({
      modalVisible: true,
      modalType,
      currentItem,
    });
  }

  render() {
    const { state } = this;

    // 解决 Form.create initialValue 的问题
    // 每次创建一个全新的组件, 而不做diff
    // 如果你使用了redux, 请移步 http://react-component.github.io/form/examples/redux.html
    const TableItemModalGen = () => {
      return <TableItemModal
        item={ state.currentItem }
        visible={ state.modalVisible }
        onCreate={ this.handleCreate }
        onEdit={ this.handleEdit }
        onCancel={ this.handleModalHide }
        type={ state.modalType }
      />
    };

    return <div className={styles.normal}>
      <TableItemModalGen />
      <SearchForm
        onSearch={ this.handleSearch }
        onShowCreateModal={ this.handleModalShow.bind(this, 'create') }
      />
      <TableList
        dataSource={ this.state.data }
        loading={ this.state.loading }
        pagination={ this.pagination }
        total={ this.state.page.total }
        current={ this.state.page.current }
        onPageChange={ this.handlePageChange }
        onShowEditModal={ this.handleModalShow.bind(this, 'edit') }
        onDelete={ this.handleDelete }
      />
    </div>;
  }
}

export default TableListContainer;
