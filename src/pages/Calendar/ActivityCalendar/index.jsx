// libs
import React from "react";
import { Calendar as CalendarAnt, Spin } from "antd";
import "moment/locale/vi";
import locale from "antd/es/date-picker/locale/vi_VN";
// others
import "./style.scss";
import DateItem from "../DateItem";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";

const ActivityCalendar = () => {
  const { values, setFieldValue } = useFormikContext();
  const { isLoading } = useSelector((state) => state.TRACKING_ACTIVITY_REDUCER);

  return (
    <div className="activity-calendar-wrapper">
      <Spin spinning={isLoading}>
        <CalendarAnt
          locale={locale}
          dateCellRender={(date) => <DateItem date={date} />}
          value={values.date}
          onSelect={(date) => setFieldValue("date", date)}
        />
      </Spin>
    </div>
  );
};

export default ActivityCalendar;
