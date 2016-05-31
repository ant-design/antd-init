import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
  } catch (e) {
  }
  return key;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
  }

  render() {
    const { location } = this.props;
    return (
      <Menu onClick={ this.handleClick }
        selectedKeys={ [getMenuKeyFromUrl(location.pathname)] }
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="example">
          <Link to="/example"><Icon type="bars" />Examples</Link>
        </Menu.Item>
        <Menu.Item key="todo">
          <Link to="/todo"><Icon type="appstore" />Todo</Link>
        </Menu.Item>
        <Menu.Item key="antd">
          <a href="http://ant.design/" target="_blank">ant.design</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
