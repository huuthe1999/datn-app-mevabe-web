// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
// others
import { addChild } from "@/actions/ChildManage";
import "./style.scss";
import { useRouter } from "@/hooks";
import CONSTANTS from "@/constants";

const AddButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Button
      icon={<PlusCircleOutlined />}
      className="add-button-wrapper"
      type="primary"
      size="large"
      onClick={() => {
        dispatch(addChild());

        router.push(CONSTANTS.ROUTERS.CHILD_MANAGE);
      }}
    >
      Thêm bé
    </Button>
  );
};

export default AddButton;
