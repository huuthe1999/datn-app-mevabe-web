// libs
import {
  fetchWeanNoteDetail,
  setShowWeanNotesModal,
} from "@/actions/TrackingWean";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EditFilled,
} from "@ant-design/icons";
import { Button, List, Skeleton } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDelete from "../../components/ButtonDelete";
import DetailWeanData from "../../components/DetailWeanData";
import WeanNoteAdd from "../WeanNoteAdd";
// others
import "./style.scss";

const WeanNotesList = () => {
  const { weanNotes, isLoading } = useSelector(
    (state) => state.TRACKING_WEAN_REDUCER
  );
  const dispatch = useDispatch();

  return (
    <div className="wean-notes-list-wrapper">
      <WeanNoteAdd />
      <List
        itemLayout="horizontal"
        dataSource={weanNotes}
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
                  dispatch(setShowWeanNotesModal(true));
                  dispatch(fetchWeanNoteDetail({ weanId: _id }));
                }}
              />,
              <ButtonDelete _id={_id} />,
            ]}
          >
            <Skeleton paragraph={{ rows: 1 }} active loading={isLoading}>
              <List.Item.Meta
                title={
                  <span>
                    <CalendarOutlined />{" "}
                    {moment(new Date(date)).format("DD/MM/YYYY")}
                    {" - "}
                    <ClockCircleOutlined />{" "}
                    {moment(new Date(date)).format("HH:mm")}
                  </span>
                }
                description={<DetailWeanData {...data} />}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default WeanNotesList;
