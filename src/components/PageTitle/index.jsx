// libs
import React from "react";
import { Helmet } from "react-helmet";
// hooks
import { useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const PageTitle = () => {
  const router = useRouter();
  const { pathname = CONSTANTS.ROUTERS.HOME } = router.location;

  return (
    <Helmet>
      <title>{CONSTANTS.PAGE_NAMES[pathname]}</title>
    </Helmet>
  );
};

export default PageTitle;
