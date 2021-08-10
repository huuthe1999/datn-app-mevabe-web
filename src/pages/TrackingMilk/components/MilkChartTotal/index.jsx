// libs
import React from "react";
import { Column } from "@ant-design/charts";
// others
import "./style.scss";
import { useSelector } from "react-redux";
import moment from "moment";

const MilkChartTotal = () => {
  const { milkNotes } = useSelector((state) => state.TRACKING_MILK_REDUCER);

  const totalChartData = () =>
    Object.values(
      milkNotes.reduce((previous, { date, motherMilk, powderedMilk }) => {
        const dateObj = moment(new Date(date));
        const formattedDate = dateObj.format("D/M");
        return {
          ...previous,
          [formattedDate]: {
            date: formattedDate,
            Tổng:
              motherMilk + powderedMilk + (previous[formattedDate]?.Tổng || 0),
          },
        };
      }, {})
    );

  return (
    <div className="milk-chart-total-wrapper">
      <Column
        data={totalChartData()}
        xField="date"
        yField="Tổng"
        style={{ width: "100%" }}
        color="#6c5ce7"
      />
    </div>
  );
};

export default MilkChartTotal;
