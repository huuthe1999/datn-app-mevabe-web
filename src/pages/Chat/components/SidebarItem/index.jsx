// libs
import { setCurrentConversation } from "@/actions/Chat";
import { useAuth } from "@/hooks";
import { Avatar, Badge, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const SidebarItem = ({ avatar, _id, name }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { currentUser, messages, unread } = useSelector(
    (state) => state.CHAT_REDUCER
  );

  const messageByUser = messages[_id] || [];
  const lastMessage = messageByUser.slice(-1)[0] || {};

  return (
    <div
      className={classNames("sidebar-item-wrapper", {
        isActive: currentUser?._id === _id,
      })}
      onClick={() => {
        if (currentUser?._id !== _id) {
          dispatch(setCurrentConversation({ avatar, _id, name }));
        }
      }}
    >
      <div className="sidebar-item-wrapper-inner">
        <Avatar src={avatar} size={50} />
        <div>
          <div className="name-wrapper">
            <Typography.Title level={5}>{name}</Typography.Title>
            <Badge count={unread[_id] || 0} />
          </div>
          <Typography.Text type="secondary" ellipsis className="last-mes">
            {lastMessage?.sender === user?._id ? "Bạn: " : ""}
            {lastMessage?.text ||
              ((lastMessage?.media || []).length
                ? `Đã gửi ${(lastMessage?.media || []).length} hình ảnh`
                : "")}
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
