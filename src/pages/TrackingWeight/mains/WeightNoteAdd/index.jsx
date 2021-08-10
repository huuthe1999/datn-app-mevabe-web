// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./style.scss";
import { setShowWeightNotesModal } from "@/actions/TrackingWeight";

const WeightNoteAdd = () => {
  const dispatch = useDispatch();

  return (
    <div className="weight-note-add-wrapper">
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={() => {
          dispatch(setShowWeightNotesModal(true));
        }}
      >
        Thêm cân nặng
      </Button>
    </div>
  );
};

export default WeightNoteAdd;
