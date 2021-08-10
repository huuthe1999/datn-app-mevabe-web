import Axios from "axios";
import CONSTANTS from "@/constants";

const BASE_URL = "https://datn-app-mevabe-server.herokuapp.com";
// const BASE_URL = "https://datn-me-va-be-server.herokuapp.com";
// const BASE_URL = "http://localhost:80";
// const BASE_URL = "http://34.87.120.177:5000";

export const socketURL = BASE_URL;

export const baseURL = `${BASE_URL}/api`;

export const AXIOS_INSTANCE = Axios.create({
  baseURL,
});

export const AXIOS_AUTH = Axios.create({
  baseURL,
});

AXIOS_INSTANCE.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem(
      CONSTANTS.TOKEN.ACCESS_TOKEN
    )}`,
  },
}));

AXIOS_AUTH.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem(
      CONSTANTS.TOKEN.ACCESS_TOKEN
    )}`,
  },
}));

const authorizationErrorCodes = [401];

export const doAxiosResponseIntercept = ({ router }) =>
  new Promise((resolve) => {
    AXIOS_INSTANCE.interceptors.response.use(
      (response) => response,
      (error) => {
        const { config, status } = error?.response || {};
        if (
          authorizationErrorCodes.includes(status) &&
          config &&
          !config.__isRetryRequest
        ) {
          const refreshToken = localStorage.getItem(
            CONSTANTS.TOKEN.REFRESH_TOKEN
          );

          if (refreshToken) {
            AXIOS_AUTH.request({
              method: "POST",
              url: CONSTANTS.ENDPOINTS.AUTHS.REFRESH_TOKEN,
              data: {
                refreshToken,
              },
            }).then((response) => {
              const {
                data: { status, data: { accessToken, refreshToken } = {} } = {},
              } = response || {};

              if (status > 0 && accessToken && refreshToken) {
                localStorage.setItem(CONSTANTS.TOKEN.ACCESS_TOKEN, accessToken);
                localStorage.setItem(
                  CONSTANTS.TOKEN.REFRESH_TOKEN,
                  refreshToken
                );
                router.replace({
                  ...router.location,
                  state: {
                    ...router.location.state,
                    shouldRefreshUser: new Date().getTime(),
                  },
                });

                return AXIOS_INSTANCE.request({
                  ...config,
                  headers: {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`,
                  },
                });
              }

              router.replace({
                ...router.location,
                state: {
                  ...router.location.state,
                  shouldLogOut: new Date().getTime(),
                },
              });

              return response;
            });
          }
        }
        return error;
      }
    );
    resolve();
  });
