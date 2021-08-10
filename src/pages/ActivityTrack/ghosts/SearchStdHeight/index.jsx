// libs
import { fetchStandardHeight } from "@/actions/ActivityTrack";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchStdHeight = () => {
  const { currentChild, children } = useChild();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchStandardHeight({
        params: {
          isBorn: children[currentChild]?.isBorn,
          gender: children[currentChild]?.gender,
        },
        isMax: true,
      })
    );
    dispatch(
      fetchStandardHeight({
        params: {
          isBorn: children[currentChild]?.isBorn,
          gender: children[currentChild]?.gender,
        },
        isMax: false,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    children[currentChild]?.isBorn,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    children[currentChild]?.gender,
    dispatch,
  ]);

  return <></>;
};

export default SearchStdHeight;
