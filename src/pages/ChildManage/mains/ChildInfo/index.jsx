// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-promise-reject-errors */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/exhaustive-deps */
// libs
import React, { useEffect } from "react";
import { Button, DatePicker, Form, Input, Radio } from "antd";
import moment from "moment";
import "moment/locale/vi";
import locale from "antd/es/date-picker/locale/vi_VN";
import { useDispatch, useSelector } from "react-redux";
// others
import CONSTANTS from "@/constants";
import "./style.scss";
import { SCREEN_STATUS } from "@/dataSources/ChildManage";
import { createChild, updateChild } from "@/actions/ChildManage";
import { useChild } from "@/hooks";

const {
  FIELD_NAMES: {
    CHILD_MANAGE: {
      NAME,
      BIRTHDAY,
      GENDER,
      NICKNAME,
      DISPLAY_COVER,
      DISPLAY_AVATAR,
      AVATAR,
      AVATAR_BACKGROUND,
    },
  },
  GENDER: { GENDER_MAPPING },
} = CONSTANTS;

const ChildInfo = ({ form }) => {
  const { refreshChildren, setCurrentChild } = useChild();
  const { childInfo, screenMode, isLoadingSubmit } = useSelector(
    (state) => state.CHILD_MANAGE_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    form.resetFields();
  }, [
    childInfo[NAME],
    childInfo[NICKNAME],
    childInfo[BIRTHDAY],
    childInfo[GENDER],
    form,
  ]);

  return (
    <div className="child-info-wrapper">
      <Form
        form={form}
        initialValues={{
          ...childInfo,
          [BIRTHDAY]: moment(new Date(childInfo[BIRTHDAY])),
        }}
        layout="vertical"
        onFinish={(values) => {
          if (screenMode === SCREEN_STATUS.REGISTER) {
            dispatch(
              createChild({
                data: {
                  [NAME]: values[NAME],
                  [NICKNAME]: values[NICKNAME],
                  [GENDER]: values[GENDER],
                  [BIRTHDAY]: values[BIRTHDAY].toDate().getTime(),
                  [AVATAR]: childInfo[DISPLAY_AVATAR],
                  [AVATAR_BACKGROUND]: childInfo[DISPLAY_COVER],
                },
                cbSuccess: ({ createdChild }) => {
                  refreshChildren();
                  setCurrentChild(createdChild._id);
                },
              })
            );
          } else {
            dispatch(
              updateChild({
                childId: childInfo._id,
                data: {
                  [NAME]: values[NAME],
                  [NICKNAME]: values[NICKNAME],
                  [GENDER]: values[GENDER],
                  [BIRTHDAY]: values[BIRTHDAY].toDate().getTime(),
                  [AVATAR]: childInfo[DISPLAY_AVATAR],
                  [AVATAR_BACKGROUND]: childInfo[DISPLAY_COVER],
                },
                cbSuccess: () => refreshChildren(),
              })
            );
          }
        }}
      >
        <Form.Item
          name={NAME}
          label="Họ tên"
          hasFeedback
          required
          rules={[{ required: true, message: "Họ tên không được để trống" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item name={NICKNAME} label="Biệt danh (tên ở nhà)">
          <Input size="large" />
        </Form.Item>
        <Form.Item name={GENDER} label="Giới tính">
          <Radio.Group
            buttonStyle="solid"
            size="large"
            className="gender-radio"
          >
            {Object.entries(GENDER_MAPPING).map(([value, label]) => (
              <Radio.Button key={value} value={Number(value)}>
                {label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item name={BIRTHDAY} label="Ngày sinh" hasFeedback>
          <DatePicker
            locale={locale}
            allowClear={false}
            size="large"
            format="DD/MM/YYYY"
          />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          size="large"
          loading={isLoadingSubmit}
        >
          {screenMode === SCREEN_STATUS.REGISTER ? "Thêm bé" : "Cập nhật"}
        </Button>
      </Form>
    </div>
  );
};

export default ChildInfo;
