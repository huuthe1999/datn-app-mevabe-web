// libs
import React from "react";
import { Layout } from "antd";
// components
import Navbar from "../Navbar";
// others
import "./style.scss";

const { Header, Content } = Layout;

const AppLayout = ({ children }) => (
  <Layout className="app-layout-wrapper">
    <Header className="header">
      <Navbar />
    </Header>
    <Layout>
      {/* <Sider width={256} collapsible theme="light">
        <AppSider />
      </Sider> */}
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default AppLayout;
