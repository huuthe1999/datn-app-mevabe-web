// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
// others
import { addChild } from "@/actions/ChildManage";
import "./style.scss";

const FloatButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      icon={<PlusCircleOutlined />}
      className="float-button-wrapper"
      type="primary"
      size="large"
      style={{ visibility: "hidden" }}
      onClick={() => dispatch(addChild())}
    >
      Thêm bé
    </Button>
  );
};

export default FloatButton;
