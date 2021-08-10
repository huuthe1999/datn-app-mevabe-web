// libs
import React, { useEffect, useRef, useState } from "react";
// contexts
import { authContext } from "@/contexts";
// hooks
import { useRouter } from "@/hooks";
import CONSTANTS from "@/constants";
import { AXIOS_AUTH } from "@/configs/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const isFirstRender = useRef(true);
  const router = useRouter();

  const location = (router.location.state || {}).background || router.location;
  const { shouldRefreshUser, returnUrl, shouldLogOut } = location.state || {};

  useEffect(() => {
    if (isFirstRender.current || shouldRefreshUser) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
      }

      setIsAuthenticating(true);

      AXIOS_AUTH.get(CONSTANTS.ENDPOINTS.USERS.ME)
        .then((res) => {
          const { data: { user } = {} } = res.data;
          const { children, ...userInfo } = user || {};
          setUser(userInfo);
          if (returnUrl) router.push(returnUrl);
          setTimeout(() => setIsAuthenticating(false), 200);
        })
        .catch((err) => {
          const cbError = () => {
            setUser(null);
            localStorage.removeItem(CONSTANTS.TOKEN.ACCESS_TOKEN);
            localStorage.removeItem(CONSTANTS.TOKEN.REFRESH_TOKEN);
            setTimeout(() => setIsAuthenticating(false), 200);
          };

          if (err?.response?.status === 401) {
            const refreshToken = localStorage.getItem(
              CONSTANTS.TOKEN.REFRESH_TOKEN
            );
            if (refreshToken) {
              AXIOS_AUTH.post(CONSTANTS.ENDPOINTS.AUTHS.REFRESH_TOKEN, {
                refreshToken,
              })
                .then((response) => {
                  const {
                    data: {
                      status,
                      data: { accessToken, refreshToken } = {},
                    } = {},
                  } = response || {};

                  if (status > 0 && accessToken && refreshToken) {
                    localStorage.setItem(
                      CONSTANTS.TOKEN.ACCESS_TOKEN,
                      accessToken
                    );
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
                  } else {
                    cbError();
                  }
                })
                .catch(() => cbError());
            } else {
              cbError();
            }
          } else {
            cbError();
          }
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRefreshUser]);

  useEffect(() => {
    if (shouldLogOut) {
      setUser(null);
      localStorage.removeItem(CONSTANTS.TOKEN.ACCESS_TOKEN);
      localStorage.removeItem(CONSTANTS.TOKEN.REFRESH_TOKEN);
    }
  }, [shouldLogOut]);

  return (
    <authContext.Provider value={{ user, setUser, isAuthenticating }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
