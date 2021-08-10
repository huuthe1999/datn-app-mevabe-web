// libs
import React from "react";
import { Form, Input } from "antd";
// others
import CONSTANTS from "@/constants";
import { rules } from "@/formiks/Login";
import "./style.scss";

const { USERNAME, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN;

const FormContent = ({ form }) => (
  <div className="form-content-wrapper">
    <Form.Item name={USERNAME} rules={rules[USERNAME]} hasFeedback>
      <Input
        size="large"
        placeholder="Email hoặc Điện thoại"
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
  </div>
);

export default FormContent;
