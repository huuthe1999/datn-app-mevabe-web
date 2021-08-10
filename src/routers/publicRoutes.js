// lazyRoutes
import {
  FAQ,
  Stories,
  Handbook,
  DetailHandbook,
  StatusDetail,
  // Home,
} from "./lazyRoutes";
// others
import CONSTANTS from "@/constants";
import { Redirect } from "react-router-dom";
import React from "react";

const publicRoutes = [
  {
    path: CONSTANTS.ROUTERS.FAQ,
    component: FAQ,
  },
  {
    path: CONSTANTS.ROUTERS.STORIES,
    component: Stories,
    exact: true,
  },
  {
    path: CONSTANTS.ROUTERS.HANDBOOK,
    component: Handbook,
    exact: true,
  },
  {
    path: `${CONSTANTS.ROUTERS.HANDBOOK}/:slug`,
    component: DetailHandbook,
  },
  {
    path: CONSTANTS.ROUTERS.HOME,
    render: () => <Redirect to={CONSTANTS.ROUTERS.STORIES} />,
    // component: Home,
    exact: true,
  },
  {
    path: `${CONSTANTS.ROUTERS.STORIES}/:statusId`,
    component: StatusDetail,
    shouldResetReducer: true,
  },
];

export default publicRoutes;
