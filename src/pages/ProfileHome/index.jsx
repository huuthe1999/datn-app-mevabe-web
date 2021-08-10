// libs
import { fetchUserChilds } from "@/actions/Profile";
import { useAuth, useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// others
import "./style.scss";

const ProfileHome = () => {
  const { childs } = useSelector((state) => state.PROFILE_INFO_REDUCER);

  const router = useRouter();
  const { user } = useAuth();
  const userId = router.query.get("userId");
  const { shouldRefresh } = router.location.state || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserChilds({ userId: userId || user._id }));
  }, [dispatch, user._id, userId, shouldRefresh]);
  return (
    <div className="profile-home-wrapper">
      {/* {childs.map((child) => (
        <ChildItem key={child._id} {...child} />
      ))} */}
    </div>
  );
};

export default ProfileHome;
