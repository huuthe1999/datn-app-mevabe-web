// libs
import React from "react";
import { Avatar, Button, Popover } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
// hooks
import { useAuth } from "@/hooks";
// others
import "./style.scss";
import UserAvatarPopover from "../UserAvatarPopover";

const UserAvatar = () => {
  const { user } = useAuth();

  return (
    <Popover
      placement="bottomRight"
      overlayClassName="user-avatar-popover"
      content={<UserAvatarPopover />}
    >
      <div className="user-avatar-wrapper">
        <Avatar size={40} icon={<UserOutlined />} src={user?.avatar} />
        <Button
          type="link"
          size="small"
          icon={<CaretDownOutlined />}
          className="dropdown-button"
        >
          {user?.name}
        </Button>
      </div>
    </Popover>
  );
};
export default UserAvatar;
