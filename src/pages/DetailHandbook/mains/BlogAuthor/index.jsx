// libs
import React from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
// others
import "./style.scss";

const BlogAuthor = () => {
  const {
    blog: { author: { avatar, name, date } = {} },
  } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div className="blog-author-wrapper">
      <Avatar src={avatar} size={50} />
      <div className="right">
        <div className="name">{name}</div>
        <div className="date">
          {moment(new Date(date)).locale("vi").fromNow()}
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
