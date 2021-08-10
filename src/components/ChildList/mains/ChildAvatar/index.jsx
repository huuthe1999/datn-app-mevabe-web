// libs
import React from "react";
import classnames from "classnames";
import { Avatar } from "antd";
// hooks
import { useChild } from "@/hooks";
// others
import "./style.scss";

const ChildAvatar = ({ childId, isCurrent, isOpen, setIsOpen }) => {
  const { setCurrentChild, children, setTriggerSelectFlag } = useChild();
  const { displayFullName, displayFirstName, avatar } = children[childId];

  return (
    <div
      className={classnames("child-avatar-wrapper", {
        isOpen,
        isCurrent,
      })}
      onClick={() => {
        setCurrentChild(childId);
        setIsOpen(!isOpen);
        setTriggerSelectFlag(new Date().getTime());
      }}
    >
      <Avatar
        className={classnames({ isCurrent })}
        src={avatar}
        size={isCurrent ? 50 : 40}
      >
        {displayFirstName}
      </Avatar>
      <div className="badge">{displayFullName}</div>
    </div>
  );
};

export default ChildAvatar;
