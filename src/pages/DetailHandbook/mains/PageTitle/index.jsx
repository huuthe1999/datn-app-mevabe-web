// libs
import React from "react";
import { Helmet } from "react-helmet";
// others
import { useSelector } from "react-redux";

const PageTitle = () => {
  const { blog: { title } = {} } = useSelector(
    (state) => state.DETAIL_HANDBOOK_REDUCER
  );

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
