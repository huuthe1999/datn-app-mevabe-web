import {
  deleteActivity,
  refreshActivityList,
} from "@/actions/TrackingActivity";
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
      title="Xóa hoạt động này"
      okText="Xóa"
      cancelText="Không"
      onConfirm={() => {
        setIsLoading(true);
        dispatch(
          deleteActivity({
            activityId: _id,
            cbSuccess: () => dispatch(refreshActivityList()),
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
