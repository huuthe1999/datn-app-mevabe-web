// libs
import { triggerScrollBotttom } from "@/actions/Chat";
import { DownCircleFilled } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const ChatHeader = () => {
  const { currentUser } = useSelector((state) => state.CHAT_REDUCER);
  const dispatch = useDispatch();

  return currentUser?._id ? (
    <div className="chat-header-wrapper">
      <Avatar src={currentUser?.avatar} size={50} />
      <Typography.Title level={4}>{currentUser?.name}</Typography.Title>
      <Button
        size="large"
        type="link"
        icon={<DownCircleFilled />}
        onClick={() => dispatch(triggerScrollBotttom(currentUser?._id))}
      />
    </div>
  ) : null;
};

export default ChatHeader;
