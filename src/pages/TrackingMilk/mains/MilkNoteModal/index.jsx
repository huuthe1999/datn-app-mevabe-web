// libs
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Spin,
  TimePicker,
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
  createMilkNote,
  refreshMilkNotes,
  setShowMilkNotesModal,
  updateMilkNote,
} from "@/actions/TrackingMilk";
import CONSTANTS from "@/constants";

const {
  DATE,
  MOTHER_MILK,
  POWDERED_MILK,
  NOTE,
  START_TIME,
  END_TIME,
  MILK_TYPE,
  IMAGES,
  MILK_AMOUNT,
  MILK_TIME,
} = CONSTANTS.FIELD_NAMES.TRACKING_MILK;

const MilkNoteModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const {
    showMilkNotesModal,
    modalData: { milkNote, isLoading },
  } = useSelector((state) => state.TRACKING_MILK_REDUCER);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(setShowMilkNotesModal(false));
  };

  useEffect(() => {
    form.resetFields();
  }, [form, milkNote]);

  return (
    <Modal
      title={milkNote?._id ? "Cập nhật lượng sữa" : "Thêm lượng sữa mới"}
      destroyOnClose
      visible={showMilkNotesModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
      }}
      centered
      okText={milkNote?._id ? "Cập nhật" : "Thêm"}
      cancelText="Hủy"
      className="milk-note-modal-wrapper"
      getContainer={() =>
        document.getElementsByClassName("tracking-milk-wrapper")[0]
      }
    >
      <div className="milk-note-modal-wrapper-inner">
        <ChildInfo />
        <Spin spinning={isLoading}>
          <Form
            form={form}
            initialValues={{
              [MILK_TYPE]: milkNote?.[MOTHER_MILK]
                ? MOTHER_MILK
                : POWDERED_MILK,
              [MILK_AMOUNT]:
                milkNote?.[MOTHER_MILK] || milkNote?.[POWDERED_MILK] || 0,
              [NOTE]: milkNote?.[NOTE] || "",
              [IMAGES]: milkNote?.images || [],
              [DATE]: milkNote?.date
                ? moment(new Date(milkNote?.date))
                : moment(),
              [MILK_TIME]: [
                milkNote?.startTime
                  ? moment(new Date(milkNote?.startTime))
                  : moment(),
                milkNote?.endTime
                  ? moment(new Date(milkNote?.endTime))
                  : moment().add(5, "minute"),
              ],
            }}
            layout="vertical"
            onFinish={(values) => {
              setIsLoadingSubmit(true);
              const data = {
                [DATE]: values[DATE].toDate().getTime(),
                [NOTE]: values[NOTE],
                [START_TIME]: values[DATE].clone()
                  .set("hour", values[MILK_TIME][0].get("hour"))
                  .set("minute", values[MILK_TIME][0].get("minute"))
                  .toDate()
                  .getTime(),
                [END_TIME]: values[DATE].clone()
                  .set("hour", values[MILK_TIME][1].get("hour"))
                  .set("minute", values[MILK_TIME][1].get("minute"))
                  .toDate()
                  .getTime(),
                [values[MILK_TYPE]]: values[MILK_AMOUNT],
                [IMAGES]: values[IMAGES],
              };
              if (milkNote?._id) {
                dispatch(
                  updateMilkNote({
                    noteId: milkNote?._id,
                    data,
                    cbSuccess: () => {
                      message.success("Cập nhật lượng sữa thành công!");
                      onCancel();
                      dispatch(refreshMilkNotes());
                    },
                    cbFinally: () => setIsLoadingSubmit(false),
                  })
                );
                return;
              }
              dispatch(
                createMilkNote({
                  childId: currentChild,
                  data,
                  cbSuccess: () => {
                    message.success("Thêm lượng sữa thành công!");
                    onCancel();
                    dispatch(refreshMilkNotes());
                  },
                  cbFinally: () => setIsLoadingSubmit(false),
                })
              );
            }}
          >
            <Form.Item
              name={DATE}
              label="Ngày"
              rules={[{ required: true }]}
              hasFeedback
            >
              <DatePicker
                locale={locale}
                allowClear={false}
                format="DD/MM/YYYY"
              />
            </Form.Item>
            <Form.Item
              name={MILK_TIME}
              label="Thời gian"
              rules={[{ required: true }]}
              hasFeedback
            >
              <TimePicker.RangePicker
                allowClear={false}
                locale={locale}
                format="HH:mm"
              />
            </Form.Item>

            <Form.Item
              name={MILK_TYPE}
              label="Loại sữa"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Select>
                <Select.Option value={MOTHER_MILK}>Sữa mẹ</Select.Option>
                <Select.Option value={POWDERED_MILK}>Sữa pha</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={MILK_AMOUNT}
              label="Lượng sữa (ml)"
              rules={[
                { required: true },
                { type: "number", min: 1, message: "Lượng sữa không hợp lệ" },
              ]}
              hasFeedback
            >
              <InputNumber step={10} />
            </Form.Item>
            <Form.Item name={NOTE} label="Ghi chú">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </Modal>
  );
};

export default MilkNoteModal;
