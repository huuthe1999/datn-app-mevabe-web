// libs
import {
  fetchHeightNoteDetail,
  setShowHeightNotesModal,
} from "@/actions/TrackingHeight";
import { EditFilled } from "@ant-design/icons";
import { Button, List, Skeleton, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDelete from "../../components/ButtonDelete";
import DetailHeight from "../../components/DetailHeight";
import HeightNoteAdd from "../HeightNoteAdd";
// others
import "./style.scss";

const HeightNotesList = () => {
  const { heightNotes, isLoading } = useSelector(
    (state) => state.TRACKING_HEIGHT_REDUCER
  );
  const dispatch = useDispatch();

  return (
    <div className="height-notes-list-wrapper">
      <HeightNoteAdd />
      <List
        itemLayout="horizontal"
        dataSource={[...heightNotes].reverse()}
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
                  dispatch(setShowHeightNotesModal(true));
                  dispatch(fetchHeightNoteDetail({ noteId: _id }));
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
                    <DetailHeight data={data} date={date} />
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
export default HeightNotesList;
