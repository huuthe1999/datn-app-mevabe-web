const baseService = "users";

const USERS = {
  ME: `/${baseService}/me`,
  ID_USER_ID: (userId) => `/${baseService}/id/${userId}`,
  BLOCK_USERS: `/${baseService}/block-users`,
};

export default USERS;
