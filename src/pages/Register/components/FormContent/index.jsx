// libs
import React from "react";
import { Form, Input } from "antd";
// others
import CONSTANTS from "@/constants";
import { rules } from "@/formiks/Register";
import "./style.scss";

const {
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
  FULL_NAME,
  PHONE,
} = CONSTANTS.FIELD_NAMES.REGISTER;

const FormContent = ({ form }) => (
  <div className="form-content-wrapper">
    <Form.Item name={FULL_NAME} rules={rules[FULL_NAME]} hasFeedback>
      <Input
        size="large"
        placeholder="Họ tên"
        onPressEnter={() => form.submit()}
      />
    </Form.Item>
    <Form.Item name={EMAIL} rules={rules[EMAIL]} hasFeedback>
      <Input
        size="large"
        placeholder="Email"
        onPressEnter={() => form.submit()}
      />
    </Form.Item>
    <Form.Item name={PHONE} rules={rules[PHONE]} hasFeedback>
      <Input
        size="large"
        placeholder="Điện thoại"
        onPressEnter={() => form.submit()}
      />
    </Form.Item>
    <Form.Item name={PASSWORD} rules={rules[PASSWORD]} hasFeedback>
      <Input.Password
        size="large"
        placeholder="Mật khẩu"
        onPressEnter={() => form.submit()}
      />
    </Form.Item>
    <Form.Item
      name={CONFIRM_PASSWORD}
      rules={rules[CONFIRM_PASSWORD]}
      hasFeedback
    >
      <Input.Password
        size="large"
        placeholder="Xác nhận mật khẩu"
        onPressEnter={() => form.submit()}
      />
    </Form.Item>
  </div>
);

export default FormContent;
