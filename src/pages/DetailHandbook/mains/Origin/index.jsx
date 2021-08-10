// libs
import { Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const Origin = () => {
  const {
    blog: { info },
  } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div className="origin-wrapper">
      <Typography.Text type="secondary">
        <i>
          Nguồn:{" "}
          <a href={info} target="_blank" rel="noreferrer">
            {info}
          </a>
        </i>
      </Typography.Text>
    </div>
  );
};
export default Origin;
