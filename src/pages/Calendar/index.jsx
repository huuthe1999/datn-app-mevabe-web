// libs
import React from "react";
// others
import "./style.scss";
import ActivityList from "./ActivityList";
import { Formik } from "formik";
import ActivityCalendar from "./ActivityCalendar";
import FetchActivity from "./FetchActivity";
import WithChild from "@/components/WithChild";
import ActivityModal from "./ActivityModal";
import moment from "moment";

const Calendar = () => (
  <WithChild>
    <Formik initialValues={{ date: moment() }}>
      <div className="calendar-wrapper">
        <ActivityCalendar />
        <ActivityList />
        <FetchActivity />
        <ActivityModal />
      </div>
    </Formik>
  </WithChild>
);

export default Calendar;
