// libs
import { useChild } from "@/hooks";
import { Tag } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const DetailHeight = ({ date, data }) => {
  const { standardHeightMax, standardHeightMin } = useSelector(
    (state) => state.ACTIVITY_TRACK_REDUCER
  );
  const { children, currentChild } = useChild();

  const monthAge = Math.abs(
    moment(new Date(children[currentChild]?.birthday)).diff(
      moment(new Date(date)),
      "month"
    )
  );
  const standardMax = standardHeightMax.find(({ time }) => time === monthAge);
  const standardMin = standardHeightMin.find(({ time }) => time === monthAge);

  return (
    <div className="detail-height-wrapper">
      {standardMin && <Tag color="red">Min: {standardMin?.data}cm</Tag>}
      <Tag color="purple">Bé: {data}cm</Tag>
      {standardMax && <Tag color="green">Max: {standardMax?.data}cm</Tag>}
    </div>
  );
};

export default DetailHeight;
