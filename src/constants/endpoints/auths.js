const baseService = "auths";

const AUTHS = {
  LOGIN: `/${baseService}/login`,
  SIGNUP: `/${baseService}/signup`,
  REFRESH_TOKEN: `/${baseService}/refresh-token`,
  FORGOT_PASSWORD: `/${baseService}/forgot-password`,
  RESET_PASSWORD: `/${baseService}/reset-password`,
  LOGIN_GOOGLE: `/${baseService}/login/google`,
  LOGIN_FACEBOOK: `/${baseService}/login/facebook`,
};

export default AUTHS;
