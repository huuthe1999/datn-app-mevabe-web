// libs
import { useChild } from "@/hooks";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
// others
import "./style.scss";

const ChildInfo = () => {
  const { currentChild, children } = useChild();
  const child = children[currentChild];

  return (
    <div className="child-info-wrapper">
      <Avatar size={60} src={child.avatar}>
        {child.displayFirstName}
      </Avatar>
      <div className="name">{child.displayFullName}</div>
    </div>
  );
};

export default ChildInfo;
