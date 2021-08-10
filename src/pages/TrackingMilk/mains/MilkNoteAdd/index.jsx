// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./style.scss";
import { setShowMilkNotesModal } from "@/actions/TrackingMilk";

const MilkNoteAdd = () => {
  const dispatch = useDispatch();

  return (
    <div className="milk-note-add-wrapper">
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={() => {
          dispatch(setShowMilkNotesModal(true));
        }}
      >
        Thêm ghi chú lượng sữa
      </Button>
    </div>
  );
};

export default MilkNoteAdd;
