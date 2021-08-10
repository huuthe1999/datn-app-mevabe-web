// libs
import { updateProfile } from "@/actions/Profile";
import { useAuth, useRouter } from "@/hooks";
import { Button, Form, Input, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarChange from "./AvatarChange";
// others
import "./style.scss";

const ProfileInfo = () => {
  const { userInfo, isLoading } = useSelector(
    (state) => state.PROFILE_INFO_REDUCER
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [isSubmit, setIsSubmit] = useState(false);

  const [avatar, setAvatar] = useState(userInfo?.avatar);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    form.resetFields();
    setAvatar(userInfo?.avatar);
  }, [userInfo, form]);

  return (
    <div className="profile-info-wrapper">
      <Spin spinning={isLoading}>
        <Form
          initialValues={userInfo}
          form={form}
          layout="vertical"
          size="large"
          onFinish={(values) => {
            setIsSubmit(true);
            dispatch(
              updateProfile({
                user: { name: values.name, avatar },
                cbSuccess: () => {
                  router.replace({
                    ...router.location,
                    state: {
                      ...router.location.state,
                      shouldRefreshUser: new Date().getTime(),
                    },
                  });
                },
                cbFinally: () => setIsSubmit(false),
              })
            );
          }}
        >
          <AvatarChange {...{ avatar, setAvatar }} />
          <Form.Item
            name="name"
            label="Tên"
            required
            rules={[{ required: true, message: "Tên không được bỏ trống" }]}
          >
            <Input readOnly={userInfo?._id !== user?._id} />
          </Form.Item>
          <Form.Item name="phone" label="Điện thoại">
            <Input disabled />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input type="email" disabled />
          </Form.Item>
          {userInfo?._id === user?._id && (
            <Button
              htmlType="submit"
              type="primary"
              loading={isSubmit}
              block
              style={{ width: 200, margin: "0 auto", display: "block" }}
            >
              Cập nhật
            </Button>
          )}
        </Form>
      </Spin>
    </div>
  );
};

export default ProfileInfo;
