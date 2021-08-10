// libs
import React from "react";
import { Button } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";
// hooks
import { useLoginGoogle } from "@/hooks";
// others
import "./style.scss";

const GoogleButton = () => {
  const { signInGoogle, isLoading } = useLoginGoogle();

  return (
    <div className="google-button-wrapper">
      <Button
        size="large"
        type="primary"
        danger
        block
        loading={isLoading}
        icon={<GoogleCircleFilled />}
        onClick={signInGoogle}
      >
        Google
      </Button>
    </div>
  );
};

export default GoogleButton;
