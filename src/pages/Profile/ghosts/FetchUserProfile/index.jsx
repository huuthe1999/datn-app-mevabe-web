// libs
import { fetchUserProfile } from "@/actions/Profile";
import { useAuth, useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// other

const FetchUserProfile = () => {
  const router = useRouter();
  const { user } = useAuth();
  const userId = router.query.get("userId");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile({ userId: userId || user._id }));
  }, [dispatch, user._id, userId]);

  return <></>;
};

export default FetchUserProfile;
