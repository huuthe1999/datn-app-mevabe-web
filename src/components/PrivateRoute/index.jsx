// libs
import React from "react";
import { Redirect, Route } from "react-router-dom";
// components
import MainSpinner from "../MainSpinner";
// hooks
import { useAuth } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const PrivateRoute = (props) => {
  const { isAuthenticating, user } = useAuth();
  if (isAuthenticating) return <MainSpinner />;

  return user ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: CONSTANTS.ROUTERS.LOGIN,
        state: { returnUrl: props.path },
      }}
    />
  );
};

export default PrivateRoute;
