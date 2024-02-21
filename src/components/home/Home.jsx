import React from "react";
import { Layout, theme } from "antd";
import { Navbar } from "../navbar/Navbar";
import { MainSec } from "./MainSec";
const { Content, Footer } = Layout;

export const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>
        <Layout
          style={{
            // padding: " 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content
            style={{
              padding: "0 8%",
              minHeight: 380,
            }}
          >
            <MainSec />
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
