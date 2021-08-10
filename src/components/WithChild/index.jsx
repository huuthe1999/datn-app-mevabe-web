// libs
import React from "react";
// components
import MainSpinner from "../MainSpinner";
// hooks
import { useAuth, useChild } from "@/hooks";
// others

import NotFoundChild from "@/pages/NotFoundChild";

const WithChild = ({ children }) => {
  const { currentChild, isLoading } = useChild();
  const { isAuthenticating } = useAuth();
  if (isLoading || isAuthenticating) return <MainSpinner />;

  return currentChild ? children : <NotFoundChild />;
};

export default WithChild;
