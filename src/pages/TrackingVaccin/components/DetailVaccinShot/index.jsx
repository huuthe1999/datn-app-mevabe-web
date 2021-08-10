// libs
import { fetchVaccinShot, setShowVaccinModal } from "@/actions/TrackingVaccin";
import { useChild } from "@/hooks";
import { Avatar, Tooltip, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const statusMapping = {
  0: "Chưa tiêm",
  1: "Đã tiêm",
  2: "Bỏ qua",
};

const DetailVaccinShot = ({ vaccinationShots }) => {
  const dispatch = useDispatch();
  const { currentChild } = useChild();

  return (
    <div className="detail-vaccin-shot-wrapper">
      <div className="header">
        <Typography.Title level={5}>Số mũi tiêm/liều lượng</Typography.Title>
      </div>
      {vaccinationShots.map(({ _id, description, status, time }, index) => (
        <Tooltip title={description} key={_id}>
          <div
            className="shot-wrapper"
            onClick={() => {
              dispatch(setShowVaccinModal(true));
              dispatch(
                fetchVaccinShot({
                  childId: currentChild,
                  shotId: _id,
                })
              );
            }}
          >
            <Avatar className={classNames(`status-${status}`)}>
              {index + 1}
            </Avatar>
            <div>
              <Typography.Text>{time}</Typography.Text>
            </div>
            <div className={classNames(`status-${status}`)}>
              {statusMapping[status]}
            </div>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default DetailVaccinShot;
