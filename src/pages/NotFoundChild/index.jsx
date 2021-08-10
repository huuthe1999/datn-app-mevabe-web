// libs
import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";
import CONSTANTS from "@/constants";

const NotFoundChild = () => (
  <div className="not-found-wrapper">
    <Result
      status="404"
      title="404"
      subTitle="Tài khoản của bạn chưa có bé nào. Thêm thông tin cho bé để sử dụng tính năng này"
      extra={
        <Link to={CONSTANTS.ROUTERS.CHILD_MANAGE}>
          <Button type="primary">Thêm thông tin bé</Button>
        </Link>
      }
    />
  </div>
);

export default NotFoundChild;
