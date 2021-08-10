// libs
import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
// actions
import { reenterEmail } from "@/actions/ForgotPassword";
// others
import "./style.scss";

const SuccessGuide = () => {
  const { email } = useSelector((state) => state.FORGOT_PASSWORD_REDUCER);
  const dispatch = useDispatch();

  return (
    <div className="success-guide-wrapper">
      <div>
        Email đã được gửi tới <strong>{email}</strong>
      </div>
      <div>Kiểm tra email để reset mật khẩu</div>
      <Button type="link" onClick={() => dispatch(reenterEmail())}>
        Nhập email khác
      </Button>
    </div>
  );
};

export default SuccessGuide;
