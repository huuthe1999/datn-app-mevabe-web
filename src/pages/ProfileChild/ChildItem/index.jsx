// libs
import { Avatar } from "antd";
import React from "react";
// others
import "./style.scss";
import { ReactComponent as BoySVG } from "@/assets/images/boy.svg";
import { ReactComponent as GirlSVG } from "@/assets/images/girl.svg";
import { useAuth, useChild, useRouter } from "@/hooks";
import CONSTANTS from "@/constants";

const ChildItem = ({
  avatar,
  avatar_background,
  name,
  gender,
  userId,
  _id,
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const { setCurrentChild } = useChild();

  return (
    <div
      className="child-item-wrapper"
      style={{ backgroundImage: `url(${avatar_background})` }}
      onClick={() => {
        if (userId === user._id) {
          router.push(CONSTANTS.ROUTERS.CHILD_MANAGE);
          setCurrentChild(_id);
        }
      }}
    >
      <div className="avatar">
        <Avatar size={100} src={avatar} />
        {gender === 1 ? (
          <GirlSVG color="#f2f2f2" className="gender" />
        ) : (
          <BoySVG className="gender" />
        )}
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default ChildItem;
