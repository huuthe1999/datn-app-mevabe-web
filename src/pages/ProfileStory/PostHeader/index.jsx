// libs
import React from "react";
import { Avatar, Tooltip } from "antd";
import moment from "moment";
import "moment/locale/vi";
// others
import "./style.scss";
import StoryOption from "../StoryOption";
import AvatarPopover from "@/components/AvatarPopover";
import ChildPopover from "@/components/ChildPopover";

const PostHeader = ({ date, user = {}, child = {}, _id }) => (
  <div className="post-header-wrapper">
    <div className="avatar">
      <AvatarPopover user={user}>
        <Avatar src={user?.avatar} size={50} />
      </AvatarPopover>
      <ChildPopover user={user} child={child}>
        <Avatar src={child.avatar} size={40} />
      </ChildPopover>
    </div>
    <div className="right">
      <div className="name">
        {`${user?.name} (${child.nickname || child.name})`}
      </div>
      <div className="date">
        <Tooltip
          placement="bottom"
          title={moment(new Date(date)).format("DD/MM/YYYY HH:mm")}
        >
          {moment(new Date(date)).locale("vi").fromNow()}
        </Tooltip>
      </div>
    </div>
    <StoryOption {...{ user, _id }} />
  </div>
);

export default PostHeader;
