// libs
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import "./style.scss";
import { setShowHeightNotesModal } from "@/actions/TrackingHeight";

const HeightNoteAdd = () => {
  const dispatch = useDispatch();

  return (
    <div className="height-note-add-wrapper">
      <Button
        icon={<PlusCircleOutlined />}
        type="primary"
        size="large"
        onClick={() => {
          dispatch(setShowHeightNotesModal(true));
        }}
      >
        Thêm chiều cao
      </Button>
    </div>
  );
};

export default HeightNoteAdd;
