// libs
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
// hooks
import { useAuth } from "@/hooks";
// others
import "./style.scss";

const CommentInput = () => {
  const { user } = useAuth();

  return user ? (
    <div className="comment-input-wrapper">
      <Avatar icon={<UserOutlined />} src={user?.avatar} />
      <Input />
    </div>
  ) : null;
};

export default CommentInput;
