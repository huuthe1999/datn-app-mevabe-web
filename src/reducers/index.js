// libs
import CONSTANTS from "@/constants";
import { combineReducers } from "redux";
// reducers
import COMMON_REDUCER from "./Common";
import HOME_REDUCER from "./Home";
import LOGIN_REDUCER from "./Login";
import REGISTER_REDUCER from "./Register";
import FORGOT_PASSWORD_REDUCER from "./ForgotPassword";
import RESET_PASSWORD_REDUCER from "./ResetPassword";
import DETAIL_HANDBOOK_REDUCER from "./DetailHandbook";
import STORIES_REDUCER from "./Stories";
import CHILD_MANAGE_REDUCER from "./ChildManage";
import ACTIVITY_TRACK_REDUCER from "./ActivityTrack";
import HANDBOOK_REDUCER from "./Handbook";
import STORY_DETAIL_REDUCER from "./StoryDetail";
import STATUS_DETAIL_REDUCER from "./StatusDetail";
import TRACKING_HEIGHT_REDUCER from "./TrackingHeight";
import TRACKING_WEIGHT_REDUCER from "./TrackingWeight";
import TRACKING_MILK_REDUCER from "./TrackingMilk";
import TRACKING_VACCIN_REDUCER from "./TrackingVaccin";
import CHAT_REDUCER from "./Chat";
import PROFILE_INFO_REDUCER from "./ProfileInfo";
import BLOCKED_USER_REDUCER from "./BlockedUser";
import PROFILE_STORY_REDUCER from "./ProfileStory";
import TRACKING_WEAN_REDUCER from "./TrackingWean";
import TRACKING_ACTIVITY_REDUCER from "./TrackingActivity";
import PROFILE_REDUCER from "./Profile";

const appReducer = combineReducers({
  COMMON_REDUCER,
  HOME_REDUCER,
  LOGIN_REDUCER,
  REGISTER_REDUCER,
  FORGOT_PASSWORD_REDUCER,
  RESET_PASSWORD_REDUCER,
  DETAIL_HANDBOOK_REDUCER,
  STORIES_REDUCER,
  CHILD_MANAGE_REDUCER,
  ACTIVITY_TRACK_REDUCER,
  HANDBOOK_REDUCER,
  STORY_DETAIL_REDUCER,
  STATUS_DETAIL_REDUCER,
  TRACKING_HEIGHT_REDUCER,
  TRACKING_WEIGHT_REDUCER,
  TRACKING_MILK_REDUCER,
  TRACKING_VACCIN_REDUCER,
  CHAT_REDUCER,
  PROFILE_INFO_REDUCER,
  BLOCKED_USER_REDUCER,
  PROFILE_STORY_REDUCER,
  TRACKING_WEAN_REDUCER,
  TRACKING_ACTIVITY_REDUCER,
  PROFILE_REDUCER,
});

const rootReducer = (state, action) => {
  const { RESET_PAGE_REDUCER } = CONSTANTS.ACTION_TYPES.COMMON_ACTIONS;
  const { type, payload } = action;

  const handleResetPageReducer = () => {
    const { page } = payload || {};

    return Object.keys(state).reduce(
      (newState, key) =>
        key.startsWith(page) ? newState : { ...newState, [key]: state[key] },
      {}
    );
  };

  return appReducer(
    type === RESET_PAGE_REDUCER ? handleResetPageReducer() : state,
    action
  );
};

export default rootReducer;
