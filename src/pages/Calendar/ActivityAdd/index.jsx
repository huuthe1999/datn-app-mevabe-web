// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./style.scss";
import { setShowActivityModal } from "@/actions/TrackingActivity";

const ActivityAdd = () => {
  const dispatch = useDispatch();

  return (
    <div className="activity-add-wrapper">
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={() => {
          dispatch(setShowActivityModal(true));
        }}
      >
        Thêm hoạt động
      </Button>
    </div>
  );
};

export default ActivityAdd;
