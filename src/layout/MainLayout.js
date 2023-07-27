import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      className="layout"
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#7a021a",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            marginRight: "20px",
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          Blogchain
        </Link>
        <Menu
          theme="dark"
          mode="vertical"
          className="menu_items"
          style={{
            backgroundColor: "#7a021a",
          }}
        >
          <Link href="/blogs">
            <items>Blogs</items>
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
          <Link href="/signup">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              SignUp
            </items>
          </Link>
          <Link href="/login">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              Login
            </items>
          </Link>
        </Menu>
      </Header>
      {/* <Layout>
        <Sider       collapsed={collapsed}>
          <Menu
            mode="vertical"
            items={[
              {
                label: "Admin",
                key: "about",
                icon: <ProfileOutlined />,
         
              },
              {
                label: "Books",
                key: "admin",
                icon:<  MobileOutlined />,
                children: [
                  {
                    label: "Book 1",
                    key: "book1",
                  },
                  {
                    label: "Book 2",
                    key: "book2",
                  },
                ],
              },
            ]}
          />
        </Sider>
      </Layout> */}
      <Content
        style={{
          padding: "0 50px",
          backgroundColor: "white",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#7a021a",
          padding: "10px 0px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ReadChian ©2023 Created by Sujon
      </Footer>
    </Layout>
  );
};
export default MainLayout;
