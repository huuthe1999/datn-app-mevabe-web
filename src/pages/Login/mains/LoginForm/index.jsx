// libs
import React from "react";
import { Form } from "antd";
import { useDispatch } from "react-redux";
// components
import FormContent from "../../components/FormContent";
import ForgotPasswordLink from "../../components/ForgotPasswordLink";
import ButtonGroup from "../../components/ButtonGroup";
// actions
import { submitLogin } from "@/actions/Login";
// hooks
import { useRouter } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import { initialValues } from "@/formiks/Login";
import "./style.scss";

const {
  TOKEN: { ACCESS_TOKEN, REFRESH_TOKEN },
} = CONSTANTS;

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { phone, email, returnUrl } = router.location.state || {};

  return (
    <div className="login-form-wrapper">
      <Form
        form={form}
        initialValues={initialValues({ phone, email })}
        onFinish={({ username, password }) =>
          dispatch(
            submitLogin({
              username,
              password,
              cbSuccess: ({ accessToken, refreshToken }) => {
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);

                router.replace({
                  ...router.location,
                  state: {
                    ...router.location.state,
                    returnUrl,
                    shouldRefreshUser: new Date().getTime(),
                  },
                });
              },
            })
          )
        }
      >
        <FormContent form={form} />
        <ForgotPasswordLink />
        <ButtonGroup form={form} />
      </Form>
    </div>
  );
};

export default LoginForm;
