const baseService = "weans";

const WEANS = {
  BASE:  `/${baseService}`,
  MATERIAL: `/${baseService}/material`,
  WEAN_ID: (weanId) => `/${baseService}/${weanId}`,
};

export default WEANS;
