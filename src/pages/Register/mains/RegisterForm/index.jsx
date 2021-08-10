// libs
import React from "react";
import { Form } from "antd";
import { useDispatch } from "react-redux";
// components
import FormContent from "../../components/FormContent";
import ButtonGroup from "../../components/ButtonGroup";
// hooks
import { useRouter } from "@/hooks";
// actions
import { submitRegister } from "@/actions/Register";
// others
import CONSTANTS from "@/constants";
import { initialValues } from "@/formiks/Register";
import "./style.scss";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const { push } = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="register-form-wrapper">
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={({ name, email, phone, password }) =>
          dispatch(
            submitRegister({
              name,
              email,
              phone,
              password,
              cbSuccess: ({ phone: registedPhone }) =>
                push(CONSTANTS.ROUTERS.LOGIN, { phone: registedPhone }),
            })
          )
        }
      >
        <FormContent form={form} />
        <ButtonGroup form={form} />
      </Form>
    </div>
  );
};

export default RegisterForm;
