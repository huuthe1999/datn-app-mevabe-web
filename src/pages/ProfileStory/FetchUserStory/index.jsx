// libs

import { fetchUserChilds } from "@/actions/Profile";
import { fetchProfileStory } from "@/actions/ProfileStory";
import { useAuth, useRouter } from "@/hooks";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const FetchUserStory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = router.query.get("userId");
  const { user } = useAuth();

  const { shouldRefresh } = router.location.state || {};

  const {
    values: { filterChild },
  } = useFormikContext();

  useEffect(() => {
    dispatch(
      fetchProfileStory({
        userId: userId || user._id,
        childId: filterChild === "all" ? null : filterChild,
      })
    );
  }, [dispatch, user._id, userId, shouldRefresh, filterChild]);

  useEffect(() => {
    dispatch(fetchUserChilds({ userId: userId || user._id }));
  }, [dispatch, user._id, userId, shouldRefresh]);

  return <></>;
};

export default FetchUserStory;
