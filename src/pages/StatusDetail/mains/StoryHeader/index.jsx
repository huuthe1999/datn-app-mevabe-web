// libs
import AvatarPopover from "@/components/AvatarPopover";
import ChildPopover from "@/components/ChildPopover";
import CONSTANTS from "@/constants";
import { Tooltip } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StoryOption from "../../components/StoryOption";
// others
import "./style.scss";

const StoryHeader = () => {
  const {
    status: { user = {}, createAt, child = {} },
  } = useSelector((state) => state.STATUS_DETAIL_REDUCER);

  return (
    <div className="story-header-wrapper">
      <div className="avatar">
        <Link to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${user?._id}`}>
          <AvatarPopover user={user} bottom>
            <Avatar src={user?.avatar} size={50} className="avatar-user" />
          </AvatarPopover>
        </Link>
        <ChildPopover user={user} child={child} bottom>
          <Avatar src={child.avatar} size={40} className="avatar-child" />
        </ChildPopover>
      </div>
      <div className="right">
        <div className="name">
          <Link
            to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${user?._id}`}
          >{`${user?.name} (${child.nickname || child.name})`}</Link>
        </div>
        <div className="date">
          <Tooltip
            placement="bottom"
            title={moment(new Date(createAt)).format("DD/MM/YYYY HH:mm")}
          >
            {moment(new Date(createAt)).locale("vi").fromNow()}
          </Tooltip>
        </div>
      </div>
      <StoryOption />
    </div>
  );
};

export default StoryHeader;
