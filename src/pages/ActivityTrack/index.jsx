// libs
import WithChild from "@/components/WithChild";
import CONSTANTS from "@/constants";
import React from "react";
import TrackingHeight from "@/pages/TrackingHeight";
// others
import "./style.scss";
import TrackingWeight from "../TrackingWeight";
import TrackingMilk from "../TrackingMilk";
import TrackingVaccin from "../TrackingVaccin";
import TrackingWean from "../TrackingWean";
import ActivityBar from "./mains/ActivityBar";
import { Switch, Route } from "react-router-dom";
import Calendar from "../Calendar";

const pageMapping = {
  [CONSTANTS.ROUTERS.TRACKING_HEIGHT]: <TrackingHeight />,
  [CONSTANTS.ROUTERS.TRACKING_WEIGHT]: <TrackingWeight />,
  [CONSTANTS.ROUTERS.TRACKING_MILK]: <TrackingMilk />,
  [CONSTANTS.ROUTERS.TRACKING_VACCIN]: <TrackingVaccin />,
  [CONSTANTS.ROUTERS.TRACKING_WEAN]: <TrackingWean />,
  [CONSTANTS.ROUTERS.CALENDAR]: <Calendar />,
};

const ActivityTrack = () => (
  <WithChild>
    <div className="activity-track-wrapper">
      <ActivityBar />
      <Switch>
        {Object.entries(pageMapping).map(([route, page]) => (
          <Route path={route} key={route}>
            {page}
          </Route>
        ))}
      </Switch>
    </div>
  </WithChild>
);

export default ActivityTrack;
