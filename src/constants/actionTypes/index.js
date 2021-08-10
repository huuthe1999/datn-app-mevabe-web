import COMMON_ACTIONS from "./Common";
import HOME_ACTIONS from "./Home";
import LOGIN_ACTIONS from "./Login";
import FORGOT_PASSWORD_ACTIONS from "./ForgotPassword";
import REGISTER_ACTIONS from "./Register";
import RESET_PASSWORD_ACTIONS from "./ResetPassword";
import DETAIL_HANDBOOK_ACTIONS from "./DetailHandbook";
import STORIES_ACTIONS from "./Stories";
import CHILD_MANAGE_ACTIONS from "./ChildManage";
import ACTIVITY_TRACK_ACTIONS from "./ActivityTrack";
import HANDBOOK_ACTIONS from "./Handbook";
import STORY_DETAIL_ACTIONS from "./StoryDetail";
import STATUS_DETAIL_ACTIONS from "./StatusDetail";
import TRACKING_HEIGHT_ACTIONS from "./TrackingHeight";
import TRACKING_WEIGHT_ACTIONS from "./TrackingWeight";
import TRACKING_MILK_ACTIONS from "./TrackingMilk";
import TRACKING_VACCIN_ACTIONS from "./TrackingVaccin";
import CHAT_ACTIONS from "./Chat";
import PROFILE_ACTIONS from "./Profile";
import BLOCKED_USER_ACTIONS from "./BlockedUser";
import PROFILE_STORY_ACTIONS from "./ProfileStory";
import TRACKING_WEAN_ACTIONS from "./TrackingWean";
import TRACKING_ACTIVITY_ACTIONS from "./TrackingActivity";

const actionTypes = {
  TRACKING_ACTIVITY_ACTIONS,
  TRACKING_WEAN_ACTIONS,
  PROFILE_STORY_ACTIONS,
  BLOCKED_USER_ACTIONS,
  PROFILE_ACTIONS,
  CHAT_ACTIONS,
  TRACKING_VACCIN_ACTIONS,
  TRACKING_MILK_ACTIONS,
  COMMON_ACTIONS,
  HOME_ACTIONS,
  LOGIN_ACTIONS,
  REGISTER_ACTIONS,
  FORGOT_PASSWORD_ACTIONS,
  RESET_PASSWORD_ACTIONS,
  DETAIL_HANDBOOK_ACTIONS,
  STORIES_ACTIONS,
  CHILD_MANAGE_ACTIONS,
  ACTIVITY_TRACK_ACTIONS,
  HANDBOOK_ACTIONS,
  STORY_DETAIL_ACTIONS,
  STATUS_DETAIL_ACTIONS,
  TRACKING_HEIGHT_ACTIONS,
  TRACKING_WEIGHT_ACTIONS,
};

const modifiedActionTypes = Object.entries(actionTypes).reduce(
  (accumulator, [pageName, pageActions]) => ({
    ...accumulator,
    [pageName]: Object.entries(pageActions).reduce(
      (previous, [actionKey, actionType]) => ({
        ...previous,
        [actionKey]: `${pageName.substring(
          0,
          pageName.length - 8
        )}_${actionType}`,
      }),
      {}
    ),
  }),
  {}
);

export default modifiedActionTypes;
