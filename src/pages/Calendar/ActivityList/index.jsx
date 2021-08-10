// libs
import {
  fetchActivityDetail,
  setShowActivityModal,
} from "@/actions/TrackingActivity";
import { EditFilled } from "@ant-design/icons";
import { Button, List, Skeleton } from "antd";
import { useFormikContext } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityAdd from "../ActivityAdd";
import ActivityDetail from "../ActivityDetail";
import ButtonDelete from "../ButtonDelete";
// others
import "./style.scss";

const ActivityList = () => {
  const { activities, isLoading } = useSelector(
    (state) => state.TRACKING_ACTIVITY_REDUCER
  );
  const dispatch = useDispatch();

  const {
    values: { date },
  } = useFormikContext();

  const list = activities.filter(
    (activity) =>
      moment(new Date(activity?.date)).format("DD/MM/YYYY") ===
      date.format("DD/MM/YYYY")
  );

  return (
    <div className="activity-list-wrapper">
      <ActivityAdd />
      <List
        itemLayout="horizontal"
        dataSource={list}
        loading={isLoading}
        size="small"
        pagination={{ pageSize: 5 }}
        renderItem={({
          startTime,
          endTime,
          active,
          rating,
          note,
          _id,
          images,
        }) => (
          <List.Item
            actions={[
              <Button
                icon={<EditFilled />}
                type="primary"
                onClick={() => {
                  dispatch(setShowActivityModal(true));
                  dispatch(fetchActivityDetail({ activityId: _id }));
                }}
              />,
              <ButtonDelete _id={_id} />,
            ]}
          >
            <Skeleton paragraph={{ rows: 1 }} active loading={isLoading}>
              <List.Item.Meta
                title={moment(new Date(startTime)).format("DD/MM/YYYY")}
                description={
                  <ActivityDetail
                    {...{ startTime, endTime, active, rating, images, note }}
                  />
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default ActivityList;
