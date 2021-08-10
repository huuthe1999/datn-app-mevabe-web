const baseService = "activities";

const ACTIVITY = {
  BASE: `/${baseService}`,
  ACTIVITY_ID: (activityId) => `/${baseService}/${activityId}`,
};

export default ACTIVITY;
