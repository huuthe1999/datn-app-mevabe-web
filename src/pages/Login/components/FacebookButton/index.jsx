// libs
import React, { useState } from "react";
import { Button, message } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// hook
import { useLoginFacebook } from "@/hooks";
// others
import "./style.scss";

const FacebookButton = () => {
  const { requestSignInFacebook, FACEBOOK_APP_ID } = useLoginFacebook();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="facebook-button-wrapper">
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        callback={({ accessToken, userID }) =>
          requestSignInFacebook({
            accessToken,
            userID,
            cbFinally: () => setIsLoading(false),
          })
        }
        render={({ onClick }) => (
          <Button
            size="large"
            block
            loading={isLoading}
            icon={<FacebookFilled />}
            onClick={() => {
              setIsLoading(true);
              onClick();
            }}
          >
            Facebook
          </Button>
        )}
        onFailure={() => {
          message.error("Đăng nhập bằng Facebook thất bại");
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default FacebookButton;
