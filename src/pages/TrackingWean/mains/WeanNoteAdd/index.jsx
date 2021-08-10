// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./style.scss";
import { setShowWeanNotesModal } from "@/actions/TrackingWean";

const WeanNoteAdd = () => {
  const dispatch = useDispatch();

  return (
    <div className="wean-note-add-wrapper">
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={() => {
          dispatch(setShowWeanNotesModal(true));
        }}
      >
        Thêm ghi chú ăn dặm
      </Button>
    </div>
  );
};

export default WeanNoteAdd;
