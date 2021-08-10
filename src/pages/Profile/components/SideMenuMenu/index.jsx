// libs
import CONSTANTS from "@/constants";
import { useAuth, useRouter } from "@/hooks";
import {
  CameraOutlined,
  SettingOutlined,
  SmileOutlined,
  StopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const SideMenuMenu = () => {
  const router = useRouter();
  const { pathname } = router.location;
  const [currentOpenKeys, setCurrentOpenKeys] = useState([]);
  const { user } = useAuth();
  const { userInfo } = useSelector((state) => state.PROFILE_REDUCER);
  const { query } = router;

  const searchQuery = query.toString() ? `?${query.toString()}` : "";

  useEffect(() => {
    setCurrentOpenKeys([pathname]);
  }, [pathname]);

  return (
    <div className="side-menu-menu-wrapper">
      <Menu mode="inline" style={{ width: 300 }} selectedKeys={currentOpenKeys}>
        <Menu.Item key={CONSTANTS.ROUTERS.PROFILE_INFO} icon={<UserOutlined />}>
          <Link to={CONSTANTS.ROUTERS.PROFILE_INFO + searchQuery}>
            Thông tin tài khoản
          </Link>
        </Menu.Item>
        <Menu.Item
          key={CONSTANTS.ROUTERS.PROFILE_CHILD}
          icon={<SmileOutlined />}
        >
          <Link
            to={{
              pathname: CONSTANTS.ROUTERS.PROFILE_CHILD,
              search: searchQuery,
              state: {
                shouldRefresh: new Date().getTime(),
              },
            }}
          >
            Thông tin bé
          </Link>
        </Menu.Item>
        <Menu.Item
          key={CONSTANTS.ROUTERS.PROFILE_STORY}
          icon={<CameraOutlined />}
        >
          <Link
            to={{
              pathname: CONSTANTS.ROUTERS.PROFILE_STORY,
              search: searchQuery,
              state: {
                shouldRefresh: new Date().getTime(),
              },
            }}
          >
            Xem lại khoảnh khắc
          </Link>
        </Menu.Item>
        {user._id === userInfo?._id && (
          <Menu.SubMenu key={4} icon={<SettingOutlined />} title="Nâng cao">
            <Menu.Item
              key={CONSTANTS.ROUTERS.PROFILE_BLOCKED_USER}
              icon={<StopOutlined />}
            >
              <Link to={CONSTANTS.ROUTERS.PROFILE_BLOCKED_USER + searchQuery}>
                Người dùng đã chặn
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        )}
      </Menu>
    </div>
  );
};

export default SideMenuMenu;
