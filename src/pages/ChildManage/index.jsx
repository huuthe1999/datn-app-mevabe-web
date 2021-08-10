// libs
import React from "react";
import { Form, Spin } from "antd";
import { useSelector } from "react-redux";
// components
import PageHeader from "./mains/PageHeader";
import ChildInfo from "./mains/ChildInfo";
import FloatButton from "./mains/FloatButton";
import SearchChildInfo from "./ghosts/SearchChildInfo";
// others
import "./style.scss";
import DeleteButton from "./mains/DeleteButton";

const ChildManage = () => {
  const [form] = Form.useForm();
  const { isLoading: isLoadingChildDetail } = useSelector(
    (state) => state.CHILD_MANAGE_REDUCER
  );

  return (
    <div className="child-manage-wrapper">
      <Spin spinning={isLoadingChildDetail}>
        <PageHeader form={form} />
        <ChildInfo form={form} />
      </Spin>
      <div className="button">
        <FloatButton />
        <DeleteButton />
      </div>
      <SearchChildInfo />
    </div>
  );
};

export default ChildManage;
