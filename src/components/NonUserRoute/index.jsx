// libs
import React from "react";
import { Redirect, Route } from "react-router-dom";
// components
import MainSpinner from "../MainSpinner";
// hooks
import { useAuth, useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const {
  ROUTERS: { HOME },
} = CONSTANTS;

const NonUserRoute = (props) => {
  const { user, isAuthenticating } = useAuth();
  const router = useRouter();
  const { returnUrl = HOME } = router.location.state || {};

  if (isAuthenticating) return <MainSpinner />;
  return user ? <Redirect to={returnUrl} /> : <Route {...props} />;
};

export default NonUserRoute;
