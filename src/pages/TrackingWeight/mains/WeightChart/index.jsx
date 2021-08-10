// libs
import React from "react";
import { Line } from "@ant-design/charts";
// others
import "./style.scss";
import { useSelector } from "react-redux";
import moment from "moment";
import { Empty, Spin, Typography } from "antd";
import { useChild } from "@/hooks";

const WeightChart = () => {
  const { weightNotes, isLoading } = useSelector(
    (state) => state.TRACKING_WEIGHT_REDUCER
  );
  const { standardWeightMax, standardWeightMin } = useSelector(
    (state) => state.ACTIVITY_TRACK_REDUCER
  );
  const { currentChild, children } = useChild();

  const chartData = () => {
    const defaultChartData = weightNotes.map(({ date, data }) => ({
      date: moment(new Date(date)).format("D/M"),
      data,
    }));

    if (children[currentChild]?.isBorn) {
      return weightNotes.reduce((previous, { date, data }) => {
        const dateObj = moment(new Date(date));
        const formattedDate = dateObj.format("D/M");
        const monthAge = Math.abs(
          moment(new Date(children[currentChild]?.birthday)).diff(
            dateObj,
            "month"
          )
        );
        const standardMaxNote = standardWeightMax.find(
          ({ time }) => time === monthAge
        );
        const standardMinNote = standardWeightMin.find(
          ({ time }) => time === monthAge
        );

        return [
          ...previous,
          {
            date: formattedDate,
            data,
            name: children[currentChild]?.nickname,
          },
          {
            date: formattedDate,
            data: standardMaxNote?.data,
            name: "Cân nặng tiêu chuẩn (max)",
          },
          {
            date: formattedDate,
            data: standardMinNote?.data,
            name: "Cân nặng tiêu chuẩn (min)",
          },
        ];
      }, []);
    }

    return defaultChartData;
  };

  return (
    <Spin spinning={isLoading}>
      <div className="grow-note-chart-wrapper">
        <Typography.Title level={3}>Cân nặng (kg)</Typography.Title>
        <div className="grow-note-chart-wrapper-inner">
          {weightNotes.length ? (
            <Line
              data={chartData()}
              xField="date"
              yField="data"
              seriesField="name"
              style={{ width: "100%" }}
              point={{
                size: 5,
                shape: "diamond",
              }}
              color={["#BB6BD9", "#14ad00", "#D62A0D"]}
            />
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              description={<span>Không có dữ liệu</span>}
            />
          )}
        </div>
      </div>
    </Spin>
  );
};

export default WeightChart;
