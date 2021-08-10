const baseService = "messages";

const MESSAGES = {
  BASE: `/${baseService}`,
  CONVERSATIONS: `/${baseService}/conversations`,
  USERID: (userId) => `/${baseService}/${userId}`,
};

export default MESSAGES;
