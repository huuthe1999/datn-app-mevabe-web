// libs
import { useChild } from "@/hooks";
import { Tag } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const DetailWeight = ({ date, data }) => {
  const { standardWeightMax, standardWeightMin } = useSelector(
    (state) => state.ACTIVITY_TRACK_REDUCER
  );
  const { children, currentChild } = useChild();

  const monthAge = Math.abs(
    moment(new Date(children[currentChild]?.birthday)).diff(
      moment(new Date(date)),
      "month"
    )
  );
  const standardMax = standardWeightMax.find(({ time }) => time === monthAge);
  const standardMin = standardWeightMin.find(({ time }) => time === monthAge);

  return (
    <div className="detail-weight-wrapper">
      {standardMin && <Tag color="red">Min: {standardMin?.data}kg</Tag>}
      <Tag color="purple">Bé: {data}kg</Tag>
      {standardMax && <Tag color="green">Max: {standardMax?.data}kg</Tag>}
    </div>
  );
};

export default DetailWeight;
