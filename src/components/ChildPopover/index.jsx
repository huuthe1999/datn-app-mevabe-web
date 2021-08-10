// libs
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const ChildPopover = ({ children, user, child, bottom }) => {
  const { user: currentUser } = useAuth();

  return (
    <Popover
      placement={bottom && "bottom"}
      content={
        <div className="child-popover-wrapper">
          {/* <div className="child-cover">
            {child.avatar_background && (
              <img src={child.avatar_background} alt="cover" />
            )}
          </div> */}
          <Avatar src={child?.avatar} size={100} />
          <div className="child-popover-wrapper-inner">
            <div>
              <Link
                to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${user?._id}`}
                className="user-name"
                target="_blank"
              >
                {child?.name}
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

export default ChildPopover;
