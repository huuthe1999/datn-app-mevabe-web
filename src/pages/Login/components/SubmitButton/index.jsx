// libs
import React from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const SubmitButton = ({ form }) => {
  const { isLoading } = useSelector((state) => state.LOGIN_REDUCER);

  return (
    <div className="submit-button-wrapper">
      <Button
        loading={isLoading}
        onClick={() => form.submit()}
        type="primary"
        size="large"
        block
      >
        Đăng nhập
      </Button>
    </div>
  );
};

export default SubmitButton;
