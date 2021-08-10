const baseService = "comments";

const COMMENTS = {
  HIGH_LEVEL_STATUS_ID: (statusId) => `/${baseService}/high-level/${statusId}`,
  LOW_LEVEL_STATUS_ID_COMMENT_ID: (statusId, commentId) =>
    `/${baseService}/low-level/${statusId}/${commentId}`,
  LOW_LEVEL_COMMENT_ID: (commentId) => `/${baseService}/low-level/${commentId}`,
};

export default COMMENTS;
