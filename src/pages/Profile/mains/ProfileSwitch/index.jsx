// libs
import CONSTANTS from "@/constants";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BlockedUser from "@/pages/BlockedUser";
import ChildManage from "@/pages/ChildManage";
import ProfileChild from "@/pages/ProfileChild";
import ProfileInfo from "@/pages/ProfileInfo";
import ProfileStory from "@/pages/ProfileStory";

const ProfileSwitch = () => (
  <Switch>
    <Route path={CONSTANTS.ROUTERS.PROFILE_INFO}>
      <ProfileInfo />
    </Route>
    <Route path={CONSTANTS.ROUTERS.PROFILE_CHILD}>
      <ProfileChild />
    </Route>
    <Route path={CONSTANTS.ROUTERS.CHILD_MANAGE}>
      <ChildManage />
    </Route>
    <Route path={CONSTANTS.ROUTERS.PROFILE_BLOCKED_USER}>
      <BlockedUser />
    </Route>
    <Route path={CONSTANTS.ROUTERS.PROFILE_STORY}>
      <ProfileStory />
    </Route>
    <Route>
      <Redirect to={CONSTANTS.ROUTERS.PROFILE_INFO} />
    </Route>
  </Switch>
);

export default ProfileSwitch;
