// libs
import { activeMapping } from "@/dataSources/TrackingActivity";
import { ratingMapping } from "@/dataSources/TrackingWean";
import { Tag, Image, Typography } from "antd";
import moment from "moment";
import React from "react";
// others
import "./style.scss";

const ActivityDetail = ({
  active,
  startTime,
  endTime,
  rating,
  images = [],
  note,
}) => (
  <div className="activity-detail-wrapper">
    <Tag color="red">{activeMapping[active]}</Tag>
    <Tag color="green">
      {moment(new Date(endTime)).diff(moment(new Date(startTime)), "minute")}{" "}
      phút
    </Tag>
    <Tag color="purple">{ratingMapping[rating]?.text}</Tag>
    <div className="note">
      <Typography.Text>{note}</Typography.Text>
    </div>
    <div className="images">
      <Image.PreviewGroup>
        {images.map((img) => (
          <Image src={img} key={img} />
        ))}
      </Image.PreviewGroup>
    </div>
  </div>
);

export default ActivityDetail;
