// libs
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
// hooks
import { useAuth, useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import "./style.scss";
import {
  CameraOutlined,
  BookOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { HANDBOOK, STORIES, CHAT, TRACKING_HEIGHT } = CONSTANTS.ROUTERS;

const menuItems = [
  {
    key: "cam-nang",
    label: "Cẩm nang",
    icon: <BookOutlined />,
    path: HANDBOOK,
  },
  {
    key: "khoanh-khac",
    label: "Khoảnh khắc",
    icon: <CameraOutlined />,
    path: STORIES,
  },
  {
    key: "tin-nhan",
    label: "Tin nhắn",
    path: CHAT,
    icon: <MessageOutlined />,
    isPrivateRoute: true,
  },
  {
    key: "theo-doi-hoat-dong",
    label: "Theo dõi hoạt động",
    path: TRACKING_HEIGHT,
    icon: <UserOutlined />,
    isPrivateRoute: true,
  },
];

const HeaderMenu = () => {
  const { push, pathname, location } = useRouter();
  const { user } = useAuth();
  const [currentOpenKeys, setCurrentOpenKeys] = useState([]);

  useEffect(() => {
    setCurrentOpenKeys([
      menuItems.find(({ key }) => pathname.includes(key))?.key || "",
    ]);
  }, [pathname]);

  return (
    <div className="header-menu-wrapper">
      <Menu mode="horizontal" selectedKeys={currentOpenKeys}>
        {menuItems.map(({ label, path, isPrivateRoute = false, icon, key }) => (
          <Menu.Item
            key={key}
            onClick={() => {
              if (isPrivateRoute && !user) {
                push({
                  pathname: CONSTANTS.ROUTERS.LOGIN,
                  state: {
                    ...(location.state || {}),
                    returnUrl: path,
                  },
                });
                return;
              }
              push({
                pathname: path,
                state: {
                  ...(location.state || {}),
                  shouldRefreshData: new Date().getTime(),
                },
              });
            }}
            icon={icon}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
