// libs
import {
  fetchWeightNoteDetail,
  setShowWeightNotesModal,
} from "@/actions/TrackingWeight";
import { EditFilled } from "@ant-design/icons";
import { Button, List, Skeleton, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDelete from "../../components/ButtonDelete";
import DetailWeight from "../../components/DetailWeight";
import WeightNoteAdd from "../WeightNoteAdd";
// others
import "./style.scss";

const WeightNotesList = () => {
  const { weightNotes, isLoading } = useSelector(
    (state) => state.TRACKING_WEIGHT_REDUCER
  );
  const dispatch = useDispatch();

  return (
    <div className="weight-notes-list-wrapper">
      <WeightNoteAdd />
      <List
        itemLayout="horizontal"
        dataSource={[...weightNotes].reverse()}
        loading={isLoading}
        size="small"
        pagination={{ pageSize: 5 }}
        renderItem={({ date, data, text, _id }) => (
          <List.Item
            actions={[
              <Button
                icon={<EditFilled />}
                type="primary"
                onClick={() => {
                  dispatch(setShowWeightNotesModal(true));
                  dispatch(fetchWeightNoteDetail({ noteId: _id }));
                }}
              />,
              <ButtonDelete _id={_id} />,
            ]}
          >
            <Skeleton paragraph={{ rows: 1 }} active loading={isLoading}>
              <List.Item.Meta
                title={moment(new Date(date)).format("DD/MM/YYYY")}
                description={
                  <>
                    <DetailWeight data={data} date={date} />
                    <div className="text">
                      <Typography.Text>{text}</Typography.Text>
                    </div>
                  </>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default WeightNotesList;
