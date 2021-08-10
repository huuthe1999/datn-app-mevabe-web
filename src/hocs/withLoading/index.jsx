// libs
import React from "react";
// components
import ContentLoader from "@/components/ContentLoader";

const withLoading = (isLoading) => (InnerComponent) =>
  isLoading ? <ContentLoader /> : InnerComponent;

export default withLoading;
