import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import {Layout} from 'antd'
const { Footer, Sider, Content } = Layout;

function MainLayout({ children, location }) {
  console.log(children);
  return (
    <div>
      <Layout>
        <Header location={location} />
        <Content>
          <div className={styles.content}>
            <div className={styles.main}>
              {children}
            </div>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default MainLayout;
