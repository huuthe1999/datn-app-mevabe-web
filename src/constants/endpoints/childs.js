const baseService = "childs";

const CHILDS = {
  EMPTY: `/${baseService}`,
  CHILD_BY_ID: (id) => `/${baseService}/${id}`,
  ALL: `/${baseService}/all`,
  USER_USER_ID: (userId) => `/${baseService}/user/${userId}`,
};

export default CHILDS;
