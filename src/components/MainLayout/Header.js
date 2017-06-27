import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.less';

function Header({ location }) {
  return (
    <header className={styles.header}>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/dayTask">
          <Link to="/dayTask"><Icon type="bars" />每日任务</Link>
        </Menu.Item>
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/404">
          <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
        </Menu.Item>
        <Menu.Item key="/antd">
          <a href="https://github.com/dvajs/dva">dva</a>
        </Menu.Item>
      </Menu>
    </header>
  );
}

export default Header;
