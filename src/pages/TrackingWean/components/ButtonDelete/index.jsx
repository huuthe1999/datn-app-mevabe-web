import { deleteWeanNote, refreshWeanNotes } from "@/actions/TrackingWean";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const ButtonDelete = ({ _id }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Popconfirm
      title="Xóa ghi chú này"
      okText="Xóa"
      cancelText="Không"
      onConfirm={() => {
        setIsLoading(true);
        dispatch(
          deleteWeanNote({
            weanId: _id,
            cbSuccess: () => dispatch(refreshWeanNotes()),
            cbFinally: () => setIsLoading(false),
          })
        );
      }}
    >
      <Button
        icon={<DeleteFilled />}
        type="primary"
        danger
        loading={isLoading}
      />
    </Popconfirm>
  );
};

export default ButtonDelete;
