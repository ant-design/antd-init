import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../layouts/MainLayout/MainLayout';
import styles from './Users.less';
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal'

function Users({ location, dispatch, users, children }) {
  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType,
  } = users;
  const { field, keyword } = location.query;

  function handlePageChange(page) {
    dispatch({
      type: 'users/query',
      payload: { page },
    });
  }

  function handleModalShow(modalType, currentItem) {
    dispatch({
      type: 'users/showModal',
      payload: {
        modalType,
        currentItem,
      },
    })
  }

  function handleModalHide() {
    dispatch({
      type: 'users/hideModal',
    });
  }

  function handleDelete(record) {
    dispatch({
      type: 'users/delete',
      payload: record.id,
    });
  }

  function handleSearch(formData) {
    dispatch({
      type: 'users/query',
      payload: formData,
    });
  }

  function handleCreate(formData) {
    dispatch({
      type: 'users/create',
      payload: formData,
    });
  }

  function handleEdit(formData) {
    dispatch({
      type: 'users/update',
      payload: formData,
    });
  }

  // 解决 Form.create initialValue 的问题
  // 每次创建一个全新的组件, 而不做diff
  // 如果你使用了redux, 请移步 http://react-component.github.io/form/examples/redux.html
  const UserModalGen = () => {
    return <UserModal
      item={ currentItem }
      visible={ modalVisible }
      onCreate={ handleCreate }
      onEdit={ handleEdit }
      onCancel={ handleModalHide }
      type={ modalType }
    />
  };

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UserSearch
          onSearch={ handleSearch }
          onShowCreateModal={ () => handleModalShow('create') }
          field={ field }
          keyword={ keyword }
        />
        <UserList
          dataSource={ list }
          loading={ loading }
          total={ total }
          current={ current }
          onPageChange={ handlePageChange }
          onShowEditModal={ handleModalShow.bind(this, 'edit') }
          onDelete={ handleDelete }
        />
        <UserModalGen />
      </div>
    </MainLayout>
  );
}

Users.propTypes = {};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Users);
