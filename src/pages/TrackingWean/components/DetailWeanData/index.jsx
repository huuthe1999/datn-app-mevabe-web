// libs
import { ratingMapping, unitMapping } from "@/dataSources/TrackingWean";
import { useChild } from "@/hooks";
import { Avatar, Tag, Typography } from "antd";
import React from "react";
// others
import "./style.scss";

const DetailWeanData = ({ nameFood, foodAmount, note, unit, rating }) => {
  const { children, currentChild } = useChild();

  return (
    <div className="detail-wean-data-wrapper">
      <Avatar src={children[currentChild].avatar} size="large" />
      <div className="right-content">
        <div className="data">
          <Tag color="purple">{nameFood}</Tag>
          <Tag color="blue">{`${foodAmount} ${unitMapping[unit]}`}</Tag>
          <Tag color={rating < 3 ? "green" : "red"}>
            {ratingMapping[rating].text}
          </Tag>
        </div>
        <div className="note">
          <Typography.Text>{note}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default DetailWeanData;
