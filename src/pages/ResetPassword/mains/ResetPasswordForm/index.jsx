// libs
import React from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
// actions
import { resetPassword } from "@/actions/ResetPassword";
// hooks
import { useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import { initialValues, rules } from "@/formiks/ResetPassword";
import "./style.scss";
import { Redirect } from "react-router-dom";

const { PASSWORD, CONFIRM_PASSWORD } = CONSTANTS.FIELD_NAMES.RESET_PASSWORD;

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.RESET_PASSWORD_REDUCER);
  const router = useRouter();
  const token = router.query.get("token");
  const email = router.query.get("email");

  if (!token && !email) {
    message.error("Không thể khôi phục mật khẩu. Xin thử lại!");
    <Redirect to={CONSTANTS.ROUTERS.FORGOT_PASSWORD} />;
  }

  return (
    <div className="reset-password-form-wrapper">
      <div className="guide">
        Nhập mật khẩu mới cho tài khoản <strong>{email}</strong>
      </div>
      <div className="form">
        <Form
          initialValues={initialValues}
          layout="vertical"
          onFinish={({ password }) => {
            dispatch(
              resetPassword({
                newPassword: password,
                token,
                cbSuccess: () => {
                  message.success("Đổi mật khẩu thành công");
                  router.push(CONSTANTS.ROUTERS.LOGIN, { email });
                },
              })
            );
          }}
        >
          <Form.Item
            label="Mật khẩu"
            name={PASSWORD}
            rules={rules[PASSWORD]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            name={CONFIRM_PASSWORD}
            rules={rules[CONFIRM_PASSWORD]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="Xác nhận mật khẩu" />
          </Form.Item>
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            size="large"
            block
          >
            Đổi mật khẩu
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
