// libs
import {
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  Skeleton,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "moment/locale/vi";
import locale from "antd/es/date-picker/locale/vi_VN";
import "./style.scss";
import moment from "moment";
import { useChild } from "@/hooks";
import {
  refreshVaccinNotes,
  setShowVaccinModal,
  updateVaccinShot,
} from "@/actions/TrackingVaccin";
import VaccinShotInfo from "../../components/VaccinShotInfo";
import ShotStatus from "../../components/ShotStatus";

const VaccinModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const {
    showVaccinNotesModal,
    modalData: { vaccinShot, isLoading },
  } = useSelector((state) => state.TRACKING_VACCIN_REDUCER);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(setShowVaccinModal(false));
    setIsUpdate(false);
  };

  useEffect(() => {
    form.resetFields();
  }, [form, vaccinShot, isUpdate]);

  return (
    <Modal
      title={
        <Skeleton
          title={{ width: "50%" }}
          paragraph={false}
          loading={isLoading}
        >
          {vaccinShot?.diseaseName}
        </Skeleton>
      }
      destroyOnClose
      visible={showVaccinNotesModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
        disabled: !isUpdate,
      }}
      centered
      okText="Cập nhật"
      cancelText="Hủy"
      className="vaccin-modal-wrapper"
      width={600}
    >
      <div className="vaccin-modal-wrapper-inner">
        <VaccinShotInfo />
        <ShotStatus setIsUpdate={setIsUpdate} isUpdate={isUpdate} />
        <Form
          form={form}
          initialValues={{
            date: vaccinShot?.date
              ? moment(new Date(vaccinShot?.date))
              : undefined,
            status: vaccinShot?.status,
            note: vaccinShot?.note || "",
          }}
          layout="vertical"
          onFinish={(values) => {
            setIsLoadingSubmit(true);
            dispatch(
              updateVaccinShot({
                childId: currentChild,
                shotId: vaccinShot?._id,
                data: {
                  status: values.status,
                  date: values.date
                    ? values.date.toDate().getTime()
                    : undefined,
                  note: values.note,
                },
                cbFinally: () => setIsLoadingSubmit(false),
                cbSuccess: () => {
                  message.success("Cập nhật thành công");
                  onCancel();
                  dispatch(refreshVaccinNotes());
                },
              })
            );
          }}
          style={{ display: isUpdate ? "block" : "none" }}
        >
          <Form.Item name="date" label="Ngày" hasFeedback>
            <DatePicker
              locale={locale}
              allowClear
              autoFocus
              format="DD/MM/YYYY"
              name="date-input"
            />
          </Form.Item>
          <Form.Item name="status" label="Trạng thái" required>
            <Select>
              <Select.Option value={0}>Chưa tiêm</Select.Option>
              <Select.Option value={1}>Đã tiêm</Select.Option>
              <Select.Option value={2}>Bỏ qua </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="note" label="Ghi chú">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default VaccinModal;
