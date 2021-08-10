// libs
import { fetchUserChilds } from "@/actions/Profile";
import { useAuth, useRouter } from "@/hooks";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChildItem from "./ChildItem";
import AddButton from "./AddButton";
// others
import "./style.scss";

const ProfileChild = () => {
  const { childs, isLoading } = useSelector(
    (state) => state.PROFILE_INFO_REDUCER
  );

  const router = useRouter();
  const { user } = useAuth();
  const userId = router.query.get("userId");
  const { shouldRefresh } = router.location.state || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserChilds({ userId: userId || user._id }));
  }, [dispatch, user._id, userId, shouldRefresh]);

  return (
    <div className="profile-child-wrapper">
      <Spin spinning={isLoading}>
        <div className="profile-child-wrapper-inner">
          {childs.map((child) => (
            <ChildItem key={child._id} {...child} />
          ))}
        </div>
      </Spin>
      <AddButton />
    </div>
  );
};

export default ProfileChild;
