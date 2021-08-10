// libs
import React, { useState } from "react";
// others
import "./style.scss";
import { useSelector } from "react-redux";
import { Empty, Radio, Spin, Typography } from "antd";
import MilkChartGroup from "../../components/MilkChartGroup";
import MilkChartTotal from "../../components/MilkChartTotal";

const MilkChart = () => {
  const { milkNotes, isLoading } = useSelector(
    (state) => state.TRACKING_MILK_REDUCER
  );

  const [type, setType] = useState("2");

  return (
    <div className="grow-note-chart-wrapper">
      <Typography.Title level={3}>Lượng sữa (ml)</Typography.Title>
      <Spin spinning={isLoading}>
        <div className="grow-note-chart-wrapper-inner">
          {milkNotes.length ? (
            type === "2" ? (
              <MilkChartGroup />
            ) : (
              <MilkChartTotal />
            )
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              description={<span>Không có dữ liệu</span>}
            />
          )}
        </div>
      </Spin>

      <div className="chart-type">
        <Radio.Group
          size="large"
          buttonStyle="solid"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <Radio.Button value="1">Tổng</Radio.Button>
          <Radio.Button value="2">Chi tiết</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default MilkChart;
