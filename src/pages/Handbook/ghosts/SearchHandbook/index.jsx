// libs
import {
  fetchCategoryList,
  fetchHandbookList,
  resetHandbookList,
} from "@/actions/Handbook";
import { useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchHandbook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const category = router.query.get("category");

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      dispatch(
        fetchHandbookList({
          data: {
            category,
            page: 1,
            limit: 6,
          },
        })
      );
    } else {
      dispatch(resetHandbookList());
    }
  }, [category, dispatch]);

  return <></>;
};

export default SearchHandbook;
