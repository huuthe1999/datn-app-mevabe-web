// libs
import { activeMapping } from "@/dataSources/TrackingActivity";
import Tag from "antd/es/tag";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const DateItem = ({ date }) => {
  const { activities } = useSelector(
    (state) => state.TRACKING_ACTIVITY_REDUCER
  );

  const list = activities.filter(
    (activity) =>
      moment(new Date(activity?.date)).format("DD/MM/YYYY") ===
      date.format("DD/MM/YYYY")
  );

  return (
    <div className="date-item-wrapper">
      {list.map(({ active, _id }) => (
        <Tag color="#6C5CE7" key={_id}>
          {activeMapping[active]}
        </Tag>
      ))}
    </div>
  );
};

export default DateItem;
