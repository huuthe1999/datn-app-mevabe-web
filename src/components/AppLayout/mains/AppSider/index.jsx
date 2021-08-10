// libs
import CONSTANTS from "@/constants";
import {
  BookOutlined,
  CameraOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const { HANDBOOK, STORIES, CHAT } = CONSTANTS.ROUTERS;

const menuItems = [
  {
    label: "Cẩm nang",
    icon: <BookOutlined />,
    path: HANDBOOK,
  },
  {
    label: "Khoảnh khắc",
    icon: <CameraOutlined />,
    path: STORIES,
  },
  {
    label: "Tin nhắn",
    path: CHAT,
    icon: <MessageOutlined />,
    isPrivateRoute: true,
  },
];

const AppSider = () => (
  <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
    {menuItems.map(({ label, icon, path }) => (
      <Menu.Item icon={icon} key={label}>
        <Link to={path}>{label}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default AppSider;
