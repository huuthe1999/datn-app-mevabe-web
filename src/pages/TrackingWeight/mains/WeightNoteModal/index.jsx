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
  createWeightNote,
  refreshWeightNotes,
  setShowWeightNotesModal,
  updateWeightNote,
} from "@/actions/TrackingWeight";

const WeightNoteModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const {
    showWeightNotesModal,
    weightNotes,
    modalData: { weightNote: reduxWeightNote, isLoading },
  } = useSelector((state) => state.TRACKING_WEIGHT_REDUCER);
  const dispatch = useDispatch();
  const [weightNote, setWeightNote] = useState(reduxWeightNote);
  const [isFakeLoading, setIsFakeLoading] = useState(false);

  useEffect(() => {
    setWeightNote(reduxWeightNote);
  }, [reduxWeightNote]);

  const onCancel = () => {
    dispatch(setShowWeightNotesModal(false));
  };

  useEffect(() => {
    form.setFieldsValue({
      data: weightNote?.data || 0,
      date: weightNote?.date ? moment(new Date(weightNote?.date)) : undefined,
      text: weightNote?.text || "",
    });
  }, [form, weightNote]);

  return (
    <Modal
      title={weightNote?._id ? "Cập nhật cân nặng" : "Thêm cân nặng mới"}
      destroyOnClose
      visible={showWeightNotesModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
      }}
      centered
      okText={weightNote?._id ? "Cập nhật" : "Thêm"}
      cancelText="Hủy"
      className="height-note-modal-wrapper"
      getContainer={() =>
        document.getElementsByClassName("tracking-weight-wrapper")[0]
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
              if (weightNote?._id) {
                dispatch(
                  updateWeightNote({
                    noteId: weightNote?._id,
                    data: {
                      date: date.toDate().getTime(),
                      data,
                      text,
                    },
                    cbSuccess: () => {
                      message.success("Cập nhật cân nặng thành công!");
                      onCancel();
                      dispatch(refreshWeightNotes());
                    },
                    cbFinally: () => setIsLoadingSubmit(false),
                  })
                );
                return;
              }

              dispatch(
                createWeightNote({
                  childId: currentChild,
                  data: {
                    date: date.toDate().getTime(),
                    data,
                    text,
                  },
                  cbSuccess: () => {
                    message.success("Thêm cân nặng thành công!");
                    onCancel();
                    dispatch(refreshWeightNotes());
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
                  const matched = weightNotes.find(
                    ({ date }) => date >= startTime && date <= endTime
                  );
                  setWeightNote(
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
              label="Cân nặng (kg)"
              hasFeedback
              rules={[
                { type: "number", min: 0.5, message: "Cân nặng không hợp lệ" },
              ]}
              required
            >
              <InputNumber min={0} precision={2} step={1} />
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

export default WeightNoteModal;
