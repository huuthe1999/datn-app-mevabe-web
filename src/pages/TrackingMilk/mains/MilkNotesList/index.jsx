// libs
import {
  fetchMilkNoteDetail,
  setShowMilkNotesModal,
} from "@/actions/TrackingMilk";
import { EditFilled } from "@ant-design/icons";
import { Button, List, Skeleton } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDelete from "../../components/ButtonDelete";
import DetailMilkData from "../../components/DetailMilkData";
import MilkNoteAdd from "../MilkNoteAdd";
// others
import "./style.scss";

const MilkNotesList = () => {
  const { milkNotes, isLoading } = useSelector(
    (state) => state.TRACKING_MILK_REDUCER
  );
  const dispatch = useDispatch();

  return (
    <div className="milk-notes-list-wrapper">
      <MilkNoteAdd />
      <List
        itemLayout="horizontal"
        dataSource={[...milkNotes].reverse()}
        loading={isLoading}
        size="small"
        pagination={{ pageSize: 5 }}
        renderItem={({ date, _id, ...data }) => (
          <List.Item
            actions={[
              <Button
                icon={<EditFilled />}
                type="primary"
                onClick={() => {
                  dispatch(setShowMilkNotesModal(true));
                  dispatch(fetchMilkNoteDetail({ noteId: _id }));
                }}
              />,
              <ButtonDelete _id={_id} />,
            ]}
          >
            <Skeleton paragraph={{ rows: 1 }} active loading={isLoading}>
              <List.Item.Meta
                title={moment(new Date(date)).format("DD/MM/YYYY")}
                description={<DetailMilkData {...data} />}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MilkNotesList;
