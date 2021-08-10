import CONSTANTS from "@/constants";
// lazyRoutes
import {
  Profile,
  ChildManage,
  ActivityTrack,
  Chat,
  Calendar,
} from "./lazyRoutes";

const privateRoutes = [
  {
    path: CONSTANTS.ROUTERS.PROFILE,
    component: Profile,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.CHILD_MANAGE,
    component: ChildManage,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.ACTIVITY_TRACK,
    component: ActivityTrack,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.CHAT,
    component: Chat,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.CALENDAR,
    component: Calendar,
    shouldResetReducer: true,
  },
];

export default privateRoutes;
