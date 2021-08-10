// libs
import CONSTANTS from "@/constants";
import { SendOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
// others
import "./style.scss";

const MessageNoti = ({ media = [], text, sender = {}, router }) => (
  <div className="message-noti-wrapper">
    <Avatar src={sender.avatar} size="large" />
    <div>
      <div>
        <h4>{sender.name}</h4>
      </div>
      <div>
        {text || (media.length ? `Đã gửi ${media.length} hình ảnh` : "")}
      </div>

      <div>
        <Button
          type="link"
          icon={<SendOutlined />}
          onClick={() =>
            router.push(CONSTANTS.ROUTERS.CHAT, { targetUser: sender })
          }
        >
          Trả lời
        </Button>
      </div>
    </div>
  </div>
);

export default MessageNoti;
