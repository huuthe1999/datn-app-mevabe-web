// libs
import React from "react";
import { Avatar, Tooltip } from "antd";
import classnames from "classnames";
// hooks
import { useChild } from "@/hooks";
// others
import "./style.scss";

const BabyGroup = () => {
  const { children, currentChild, setCurrentChild } = useChild();

  const getFirstName = (name = "") => {
    const splitedName = name.split(" ");
    return splitedName[splitedName.length - 1] || "";
  };

  return (
    <div className="baby-group-wrapper">
      {Object.values(children).map(({ _id, name, avatar }) => (
        <div
          key={_id}
          className={classnames("baby-avatar", {
            isCurrent: _id === currentChild,
          })}
          onClick={() => setCurrentChild(_id)}
        >
          <Tooltip title={name}>
            <Avatar
              size={_id === currentChild ? 32 : 30}
              className={classnames({ isCurrent: _id === currentChild })}
              src={avatar}
            >
              {getFirstName(name)[0].toUpperCase()}
            </Avatar>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default BabyGroup;
