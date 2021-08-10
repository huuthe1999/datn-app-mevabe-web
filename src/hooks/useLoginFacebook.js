// libs
import { useDispatch } from "react-redux";
// hooks
import useRouter from "./useRouter";
// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  ENDPOINTS: {
    AUTHS: { LOGIN_FACEBOOK },
  },
  TOKEN: { ACCESS_TOKEN, REFRESH_TOKEN },
} = CONSTANTS;

const FACEBOOK_APP_ID = "446942663194674";

const useLoginFacebook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { returnUrl } = router.location.state || {};

  const cbSuccess = ({ accessToken, refreshToken }) => {
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
  };

  const requestSignInFacebook = ({ accessToken, userID, cbFinally }) => {
    dispatch(
      request({
        method: "POST",
        url: LOGIN_FACEBOOK,
        data: { accessToken, userID },
        cbSuccess,
        cbFinally,
      })
    );
  };

  return {
    requestSignInFacebook,
    FACEBOOK_APP_ID,
  };
};

export default useLoginFacebook;
