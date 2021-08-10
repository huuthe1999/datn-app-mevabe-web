const baseService = "guides";

const GUIDES = {
  BASE: `/${baseService}`,
  ALL: `/${baseService}/all`,
  CATEGORY_ALL: `/${baseService}/category/all`,
  GUIDEID: (guideId) => `/${baseService}/${guideId}`,
  SUGGESTION: `/${baseService}/suggestion`,
};

export default GUIDES;
