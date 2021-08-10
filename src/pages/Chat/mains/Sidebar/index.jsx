// libs
import { Empty, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import SidebarItem from "../../components/SidebarItem";
import SidebarItemLoading from "../../components/SidebarItemLoading";
// others
import "./style.scss";

const Sidebar = () => {
  const { conversations, isLoading } = useSelector(
    (state) => state.CHAT_REDUCER
  );

  return (
    <div className="sidebar-wrapper">
      <Typography.Title level={3}>Tin nhắn</Typography.Title>
      <div className="chat-list">
        {isLoading ? (
          [...Array(5).keys()].map((index) => (
            <SidebarItemLoading key={index} />
          ))
        ) : Object.values(conversations).length ? (
          Object.values(conversations).map((conversation = {}) => (
            <SidebarItem key={conversation._id} {...conversation} />
          ))
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            description={<span>Không tìm thấy cuộc trò chuyện</span>}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
