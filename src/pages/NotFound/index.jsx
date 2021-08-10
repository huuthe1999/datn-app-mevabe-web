// libs
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Result } from "antd";

const NotFound = () => {
  const { push } = useHistory();

  return (
    <div className="not-found-wrapper">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => push("/")}>
            Trang chủ
          </Button>
        }
      />
    </div>
  );
};
export default NotFound;
