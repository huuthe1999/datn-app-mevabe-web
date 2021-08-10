// libs
import React from "react";
import { Column } from "@ant-design/charts";
// others
import "./style.scss";
import { useSelector } from "react-redux";
import moment from "moment";

const MilkChartGroup = () => {
  const { milkNotes } = useSelector((state) => state.TRACKING_MILK_REDUCER);

  const chartData = () =>
    Object.values(
      milkNotes.reduce((previous, { date, motherMilk, powderedMilk }) => {
        const dateObj = moment(new Date(date));
        const formattedDate = dateObj.format("D/M");
        return {
          ...previous,
          [`${formattedDate}-mother`]: {
            date: formattedDate,
            name: "Sữa mẹ",
            value:
              motherMilk + (previous[`${formattedDate}-mother`]?.value || 0),
          },
          [`${formattedDate}-powder`]: {
            date: formattedDate,
            name: "Sữa pha",
            value:
              powderedMilk + (previous[`${formattedDate}-powder`]?.value || 0),
          },
        };
      }, {})
    );

  return (
    <div className="milk-chart-group-wrapper">
      <Column
        data={chartData()}
        xField="date"
        yField="value"
        seriesField="name"
        style={{ width: "100%" }}
        isGroup
        color={["#6FCF97", "#F2C94C"]}
        label={{
          position: "middle",
          layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" },
          ],
        }}
      />
    </div>
  );
};

export default MilkChartGroup;
