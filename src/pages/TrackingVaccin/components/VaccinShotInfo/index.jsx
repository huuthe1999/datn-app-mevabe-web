// libs
import { Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const VaccinShotInfo = () => {
  const {
    modalData: {
      vaccinShot: {
        time,
        description,
        diseaseDescription,
        content,
        sideEffects,
      } = {},
      isLoading,
    },
  } = useSelector((state) => state.TRACKING_VACCIN_REDUCER);

  return (
    <div className="vaccin-shot-info-wrapper">
      <Skeleton
        title={{ width: "30%" }}
        paragraph={{ rows: 2 }}
        loading={isLoading}
        active
      >
        <div>
          <h3>Mũi tiêm</h3>
          <p>{description}</p>
        </div>
      </Skeleton>
      <Skeleton
        title={{ width: "30%" }}
        paragraph={{ rows: 2 }}
        loading={isLoading}
        active
      >
        <div>
          <h3>Thời gian</h3>
          <p>{time}</p>
        </div>
      </Skeleton>
      <Skeleton
        title={{ width: "30%" }}
        paragraph={{ rows: 2 }}
        loading={isLoading}
        active
      >
        <div>
          <h3>Chi tiết bệnh</h3>
          <p>{diseaseDescription}</p>
        </div>
      </Skeleton>
      <Skeleton
        title={{ width: "30%" }}
        paragraph={{ rows: 2 }}
        loading={isLoading}
        active
      >
        <div>
          <h3>Hướng dẫn</h3>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      </Skeleton>
      <Skeleton
        title={{ width: "30%" }}
        paragraph={{ rows: 2 }}
        loading={isLoading}
        active
      >
        <div>
          <h3>Phản ứng phụ</h3>
          <p>{sideEffects}</p>
        </div>
      </Skeleton>
    </div>
  );
};

export default VaccinShotInfo;
