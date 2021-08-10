// libs
import { fetchDetailGuide } from "@/actions/DetailHandbook";
import { useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchDetailGuide = () => {
  const router = useRouter();
  const { slug } = router.params || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      const index = slug.lastIndexOf("-");
      if (index) {
        dispatch(
          fetchDetailGuide({
            data: { guideId: slug.slice(index + 1) },
          })
        );
      }
    }
  }, [dispatch, slug]);

  return <></>;
};
export default SearchDetailGuide;
