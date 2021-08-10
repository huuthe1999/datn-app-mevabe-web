// libs
import { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
// hooks
import useRouter from "./useRouter";
// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  ENDPOINTS: {
    AUTHS: { LOGIN_GOOGLE },
  },
  TOKEN: { ACCESS_TOKEN, REFRESH_TOKEN },
} = CONSTANTS;

const GOOGLE_CLIENT_ID =
  "159767678714-cidrstbuuael2i4krb4hhb6nd2tkgnms.apps.googleusercontent.com";

const useLoginGoogle = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { returnUrl } = router.location.state || {};
  const [isLoading, setIsLoading] = useState(false);

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

  const { signIn } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
    responseType: "token",
    onSuccess: (response) => {
      dispatch(
        request({
          method: "POST",
          url: LOGIN_GOOGLE,
          data: {
            accessToken: response.accessToken,
          },
          cbSuccess,
          cbFinally: () => setIsLoading(false),
        })
      );
    },
    onFailure: () => {
      setIsLoading(false);
    },
    onRequest: () => setIsLoading(true),
  });

  return {
    signInGoogle: signIn,
    isLoading,
  };
};

export default useLoginGoogle;
