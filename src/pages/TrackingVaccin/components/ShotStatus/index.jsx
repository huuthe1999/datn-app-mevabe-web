// libs
import { Button, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const statusMapping = {
  0: "Chưa tiêm",
  1: "Đã tiêm",
  2: "Bỏ qua",
};

const ShotStatus = ({ setIsUpdate, isUpdate }) => {
  const {
    modalData: { vaccinShot: { status, date, note } = {} },
  } = useSelector((state) => state.TRACKING_VACCIN_REDUCER);

  return (
    <div className="shot-status-wrapper">
      <h3>Trạng thái</h3>
      <p className="flex">
        <span>
          {statusMapping[status]}
          {status === 1 && moment(new Date(date)).isValid() && (
            <span> - {moment(new Date(date)).format("DD/MM/YYYY")}</span>
          )}
        </span>

        <Button
          type="link"
          onClick={() => {
            if (!isUpdate) {
              setIsUpdate(true);
              const inputNode = document.getElementsByName("date-input")[0];
              if (inputNode && inputNode.focus) inputNode.focus();
            } else setIsUpdate(false);
          }}
        >
          {" "}
          {isUpdate ? "Thu gọn" : "Cập nhật"}
        </Button>
      </p>
      <p style={{ whiteSpace: "pre-line" }}>
        <Typography.Text type="secondary">{note}</Typography.Text>
      </p>
    </div>
  );
};

export default ShotStatus;
