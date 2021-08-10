// libs
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "moment/locale/vi";
import locale from "antd/es/date-picker/locale/vi_VN";
import "./style.scss";
import moment from "moment";
import { useChild } from "@/hooks";
import ChildInfo from "@/pages/ActivityTrack/components/ChildInfo";
import {
  createHeightNote,
  refreshHeightNotes,
  setShowHeightNotesModal,
  updateHeightNote,
} from "@/actions/TrackingHeight";

const HeightNoteModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const {
    showHeightNotesModal,
    heightNotes,
    modalData: { heightNote: reduxHeightNote, isLoading },
  } = useSelector((state) => state.TRACKING_HEIGHT_REDUCER);
  const dispatch = useDispatch();
  const [heightNote, setHeightNote] = useState(reduxHeightNote);
  const [isFakeLoading, setIsFakeLoading] = useState(false);

  useEffect(() => {
    setHeightNote(reduxHeightNote);
  }, [reduxHeightNote]);

  const onCancel = () => {
    dispatch(setShowHeightNotesModal(false));
  };

  useEffect(() => {
    form.setFieldsValue({
      data: heightNote?.data || 0,
      date: heightNote?.date ? moment(new Date(heightNote?.date)) : undefined,
      text: heightNote?.text || "",
    });
  }, [form, heightNote]);

  return (
    <Modal
      title={heightNote?._id ? "Cập nhật chiều cao" : "Thêm chiều cao mới"}
      destroyOnClose
      visible={showHeightNotesModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
      }}
      centered
      okText={heightNote?._id ? "Cập nhật" : "Thêm"}
      cancelText="Hủy"
      className="height-note-modal-wrapper"
      getContainer={() =>
        document.getElementsByClassName("tracking-height-wrapper")[0]
      }
      width={400}
    >
      <div className="height-note-modal-wrapper-inner">
        <ChildInfo />
        <Spin spinning={isLoading || isFakeLoading}>
          <Form
            form={form}
            initialValues={{}}
            layout="vertical"
            onFinish={({ date, data, text }) => {
              setIsLoadingSubmit(true);
              if (heightNote?._id) {
                dispatch(
                  updateHeightNote({
                    noteId: heightNote?._id,
                    data: {
                      date: date.toDate().getTime(),
                      data,
                      text,
                    },
                    cbSuccess: () => {
                      message.success("Cập nhật chiều cao thành công!");
                      onCancel();
                      dispatch(refreshHeightNotes());
                    },
                    cbFinally: () => setIsLoadingSubmit(false),
                  })
                );
                return;
              }

              dispatch(
                createHeightNote({
                  childId: currentChild,
                  data: {
                    date: date.toDate().getTime(),
                    data,
                    text,
                  },
                  cbSuccess: () => {
                    message.success("Thêm chiều cao thành công!");
                    onCancel();
                    dispatch(refreshHeightNotes());
                  },
                  cbFinally: () => setIsLoadingSubmit(false),
                })
              );
            }}
          >
            <Form.Item
              name="date"
              label="Ngày"
              rules={[{ required: true }]}
              hasFeedback
              required
            >
              <DatePicker
                locale={locale}
                allowClear={false}
                format="DD/MM/YYYY"
                onChange={(selectDate) => {
                  setIsFakeLoading(true);
                  const startTime = selectDate
                    .startOf("day")
                    .toDate()
                    .getTime();
                  const endTime = selectDate.endOf("day").toDate().getTime();
                  const matched = heightNotes.find(
                    ({ date }) => date >= startTime && date <= endTime
                  );
                  setHeightNote(
                    matched || { date: selectDate.toDate().getTime() }
                  );
                  setTimeout(() => {
                    setIsFakeLoading(false);
                  }, 500);
                }}
              />
            </Form.Item>
            <Form.Item
              name="data"
              label="Chiều cao (cm)"
              hasFeedback
              rules={[
                { type: "number", min: 1, message: "Chiều cao không hợp lệ" },
              ]}
              required
            >
              <InputNumber min={0} precision={2} step={5} />
            </Form.Item>
            <Form.Item name="text" label="Ghi chú">
              <Input.TextArea rows={3} />
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </Modal>
  );
};

export default HeightNoteModal;
