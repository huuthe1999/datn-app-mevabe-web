const baseService = "status";

const STATUS = {
  CREATE: (childId) => `/${baseService}/${childId}`,
  GET_ALL: (childId) => `/${baseService}/all/child/${childId}`,
  STATUS_ID: (statusId) => `/${baseService}/${statusId}`,
  LIKE: (statusId) => `/${baseService}/like/${statusId}`,
  DISLIKE: (statusId) => `/${baseService}/dislike/${statusId}`,
  ALL_LIKERS: (statusId) => `/${baseService}/all/likers/${statusId}`,
  BASE: `/${baseService}`,
  HIDDEN: `/${baseService}/hidden`,
  ALL_FILTER_HIDDEN: `/${baseService}/all/filterHidden`,
  ALL_USER_USERID: (userId) => `/${baseService}/all/user/${userId}`,
  ALL_CHILD_CHILDID: (childId) => `/${baseService}/all/child/${childId}`,
};

export default STATUS;
