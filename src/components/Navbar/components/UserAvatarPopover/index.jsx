// libs
import React from "react";
import { Avatar, Divider, Menu, Typography } from "antd";
import {
  LogoutOutlined,
  TagsOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// hooks
import { useAuth, useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const UserAvatarPopover = () => {
  const { user, setUser } = useAuth();
  const { push } = useRouter();

  return (
    <div className="user-avatar-popover-wrapper">
      <div className="menu-profile">
        <Link to={CONSTANTS.ROUTERS.PROFILE_INFO}>
          <Avatar src={user?.avatar} size={50} />
          <div>
            <div className="name">{user.name}</div>
            <div>
              <Typography.Text type="secondary">Trang cá nhân</Typography.Text>
            </div>
          </div>
        </Link>
      </div>
      <Divider />
      <Menu>
        <Menu.Item key="feedback" icon={<WarningOutlined />}>
          Góp ý, báo lỗi
        </Menu.Item>
        <Menu.Item key="policy" icon={<TagsOutlined />}>
          <a
            href="https://sites.google.com/view/mebe-privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Chính sách và điều khoản
          </a>
        </Menu.Item>
        <Divider />
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          danger
          onClick={() => {
            setUser(null);
            localStorage.removeItem(CONSTANTS.TOKEN.ACCESS_TOKEN);
            localStorage.removeItem(CONSTANTS.TOKEN.REFRESH_TOKEN);
            push(CONSTANTS.ROUTERS.LOGIN);
          }}
        >
          Đăng xuất
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default UserAvatarPopover;
