// libs
import { useChild } from "@/hooks";
import { Avatar, Tag, Typography } from "antd";
import moment from "moment";
import React from "react";
// others
import "./style.scss";

const DetailMilkData = ({
  motherMilk,
  powderedMilk,
  note,
  startTime,
  endTime,
}) => {
  const { children, currentChild } = useChild();

  return (
    <div className="detail-milk-data-wrapper">
      <Avatar src={children[currentChild].avatar} size="large" />
      <div className="right-content">
        <div className="data">
          {motherMilk ? <Tag color="red">Sữa mẹ: {motherMilk}ml</Tag> : null}
          {powderedMilk ? (
            <Tag color="orange">Sữa pha: {powderedMilk}ml</Tag>
          ) : null}
          <Tag color="green">
            {moment(new Date(endTime)).diff(
              moment(new Date(startTime)),
              "minute"
            )}{" "}
            phút
          </Tag>
        </div>
        <div className="note">
          <Typography.Text>{note}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default DetailMilkData;
