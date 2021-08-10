// libs
import React, { useEffect } from "react";
// hooks
import { useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const {
  TOKEN: { ACCESS_TOKEN, REFRESH_TOKEN },
} = CONSTANTS;

const ReceiveToken = () => {
  const router = useRouter();
  const { returnUrl } = router.location.state || {};

  useEffect(() => {
    const token = router.query.get("token");
    if (token) {
      const loginResponse = JSON.parse(decodeURIComponent(token));
      const { data: { accessToken, refreshToken } = {} } = loginResponse || {};
      if (accessToken && refreshToken) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);

        router.replace({
          ...router.location,
          state: {
            ...router.location.state,
            returnUrl,
            shouldRefreshUser: new Date().getTime(),
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return <></>;
};

export default ReceiveToken;
