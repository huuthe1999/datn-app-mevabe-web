// libs
import { useAuth } from "@/hooks";
import { Avatar, Spin, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const UserAvatar = () => {
  const { userInfo, isLoading } = useSelector((state) => state.PROFILE_REDUCER);
  const { user } = useAuth();

  const displayUser = userInfo?._id ? userInfo : user;

  return (
    <Spin spinning={isLoading}>
      <div className="user-avatar-wrapper">
        <Avatar src={displayUser?.avatar} size={120} />
        <div className="user-name">
          <Typography.Title level={3}>{displayUser?.name}</Typography.Title>
          <Typography.Text type="secondary">
            {displayUser?.email}
          </Typography.Text>
          <Typography.Text type="secondary">
            {displayUser?.phone}
          </Typography.Text>
        </div>
      </div>
    </Spin>
  );
};

export default UserAvatar;
