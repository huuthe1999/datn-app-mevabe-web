// libs
import React from "react";
import { Alert, Spin } from "antd";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const ErrorMessage = () => {
  const { error, isLoading } = useSelector(
    (state) => state.RESET_PASSWORD_REDUCER
  );

  return (
    <div className="error-message-wrapper">
      <Spin spinning={isLoading}>
        <Alert message={error.message} type="error" showIcon />
      </Spin>
    </div>
  );
};
export default ErrorMessage;
