// libs
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const AvatarPopover = ({ children, user, bottom }) => {
  const { user: currentUser } = useAuth();

  return (
    <Popover
      placement={bottom && "bottom"}
      content={
        <div className="avatar-popover-wrapper">
          <Avatar src={user?.avatar} size={100} />
          <div className="avatar-popover-wrapper-inner">
            <div>
              <Link
                to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${user?._id}`}
                className="user-name"
                target="_blank"
              >
                {user?.name}
              </Link>
            </div>
            {user?._id !== currentUser?._id && (
              <div className="button-wrapper">
                <Link
                  to={{
                    pathname: CONSTANTS.ROUTERS.CHAT,
                    state: { targetUser: user },
                  }}
                >
                  <Button icon={<MessageOutlined />} type="primary">
                    Trò chuyện
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  );
};

export default AvatarPopover;
