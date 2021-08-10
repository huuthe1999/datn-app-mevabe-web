// libs
import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
// actions
import { saveEmail, sendResetPasswordEmail } from "@/actions/ForgotPassword";
// others
import CONSTANTS from "@/constants";
import { initialValues, rules } from "@/formiks/ForgotPassword";
import "./style.scss";

const { EMAIL } = CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD;

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.FORGOT_PASSWORD_REDUCER);

  return (
    <div className="forgot-password-form-wrapper">
      <div className="guide">Nhập email đã đăng kí để reset mật khẩu</div>
      <Form
        initialValues={initialValues}
        onFinish={({ email }) => {
          dispatch(saveEmail({ email }));
          dispatch(sendResetPasswordEmail({ email }));
        }}
      >
        <Form.Item name={EMAIL} rules={rules[EMAIL]} hasFeedback>
          <Input size="large" placeholder="Email" />
        </Form.Item>

        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          size="large"
          block
        >
          Gửi Email
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
