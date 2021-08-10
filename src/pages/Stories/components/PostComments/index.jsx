// libs
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
// hooks
import { useAuth } from "@/hooks";
// others
import "./style.scss";

const PostComments = () => {
  const { user } = useAuth();

  return (
    <div className="post-comments-wrapper">
      <Avatar icon={<UserOutlined />} src={user?.avatar} />
      <Input />
    </div>
  );
};

export default PostComments;
