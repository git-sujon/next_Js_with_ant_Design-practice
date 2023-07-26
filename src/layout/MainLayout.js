import React from 'react';
import {  Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import {
    ProfileOutlined,
    MobileOutlined,
    UserOutlined,
    FacebookFilled,
    LinkedinFilled,
    GoogleSquareFilled,
    TwitterSquareFilled,
  } from "@ant-design/icons";


  import styles from "@/styles/Home.module.css";


const MainLayout = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/blogs">
            <items>
            
              Blogs
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
         
              About Us
            </items>
          </Link>
     
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
   
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height:"100vh"
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        ReadChian ©2023 Created by Sujon
      </Footer>
    </Layout>
  );
};
export default MainLayout;