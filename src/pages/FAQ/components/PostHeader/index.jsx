// libs
import React from "react";
import { Avatar } from "antd";
import moment from "moment";
import "moment/locale/vi";
// others
import "./style.scss";

const PostHeader = ({ author: { avatar, name }, date }) => (
  <div className="post-header-wrapper">
    <Avatar src={avatar} size={45} />
    <div className="right">
      <div className="name">{name}</div>
      <div className="date">
        {moment(new Date(date)).locale("vi").fromNow()}
      </div>
    </div>
  </div>
);

export default PostHeader;
