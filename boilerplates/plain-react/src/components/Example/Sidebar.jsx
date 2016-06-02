import styles from './Sidebar.less';
import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <div className={ styles.sidebar }>
      <Menu className={ styles.menu } mode="vertical">
        <Menu.Item key="table">
          <Link to="/example/tableList">表格样例</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
