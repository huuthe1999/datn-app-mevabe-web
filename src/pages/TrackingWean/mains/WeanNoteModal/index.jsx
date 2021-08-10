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
  createWeanNote,
  refreshWeanNotes,
  setShowWeanNotesModal,
  updateWeanNote,
} from "@/actions/TrackingWean";
import {
  cookingMapping,
  ratingMapping,
  unitMapping,
} from "@/dataSources/TrackingWean";

const WeanNoteModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const {
    showWeanNotesModal,
    material,
    modalData: { weanNote, isLoading },
  } = useSelector((state) => state.TRACKING_WEAN_REDUCER);
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(setShowWeanNotesModal(false));
    setIsLoadingSubmit(false);
  };

  useEffect(() => {
    form.resetFields();
  }, [form, weanNote, showWeanNotesModal]);

  return (
    <Modal
      title={weanNote?._id ? "Cập nhật ghi chú ăn dặm" : "Thêm ghi chú ăn dặm"}
      visible={showWeanNotesModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
      }}
      centered
      width={600}
      okText={weanNote?._id ? "Cập nhật" : "Thêm"}
      cancelText="Hủy"
      className="wean-note-modal-wrapper"
      getContainer={() =>
        document.getElementsByClassName("tracking-wean-wrapper")[0]
      }
    >
      <div className="wean-note-modal-wrapper-inner">
        <ChildInfo />
        <Spin spinning={isLoading}>
          <Form
            form={form}
            initialValues={{
              ...weanNote,
              date: weanNote?.date ? moment(new Date(weanNote.date)) : moment(),
              cooking: Number.isInteger(weanNote.cooking)
                ? `${weanNote.cooking}`
                : weanNote.cooking,
              unit: Number.isInteger(weanNote.unit)
                ? `${weanNote.unit}`
                : weanNote.unit,
              rating: Number.isInteger(weanNote.rating)
                ? `${weanNote.rating}`
                : weanNote.rating,
            }}
            layout="vertical"
            onFinish={(values) => {
              setIsLoadingSubmit(true);
              const data = {
                childId: currentChild,
                ...values,
                date: moment(values.date).set("second", 0).toDate().getTime(),
              };
              if (weanNote?._id) {
                dispatch(
                  updateWeanNote({
                    weanId: weanNote?._id,
                    data,
                    cbSuccess: () => {
                      message.success("Cập nhật ăn dặm thành công!");
                      onCancel();
                      dispatch(refreshWeanNotes());
                    },
                    cbFinally: () => setIsLoadingSubmit(false),
                  })
                );
                return;
              }
              dispatch(
                createWeanNote({
                  data,
                  cbSuccess: () => {
                    message.success("Thêm ăn dặm thành công!");
                    onCancel();
                    dispatch(refreshWeanNotes());
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
            >
              <DatePicker
                locale={locale}
                allowClear={false}
                format="DD/MM/YYYY HH:mm"
                showTime
                showToday
              />
            </Form.Item>
            <Form.Item
              name="nameFood"
              label="Tên món ăn"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cooking"
              label="Cách chế biến"
              hasFeedback
              required
              rules={[
                {
                  required: true,
                  message: "Cách chế biến không được bỏ trống",
                },
              ]}
            >
              <Select>
                {Object.entries(cookingMapping).map(
                  ([cookingDiv, cookingName]) => (
                    <Select.Option value={cookingDiv} key={cookingDiv}>
                      {cookingName}
                    </Select.Option>
                  )
                )}
              </Select>
            </Form.Item>
            <div className="form-flex">
              <Form.Item
                name="foodAmount"
                label="Lượng thức ăn"
                hasFeedback
                required
                rules={[
                  {
                    required: true,
                    message: "Lượng thức ăn không được bỏ trống",
                  },
                ]}
              >
                <InputNumber step={10} />
              </Form.Item>
              <Form.Item
                name="unit"
                label="Đơn vị"
                hasFeedback
                required
                rules={[
                  {
                    required: true,
                    message: "Đơn vị không được bỏ trống",
                  },
                ]}
              >
                <Select>
                  {Object.entries(unitMapping).map(([unitDiv, unitName]) => (
                    <Select.Option value={unitDiv} key={unitDiv}>
                      {unitName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <Form.Item name="material" label="Nguyên liệu">
              <Select showSearch allowClear>
                {material.map(({ name, icon }) => (
                  <Select.Option value={name} key={name}>
                    <img src={icon} alt={name} width={32} /> {name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="rating" label="Bé có thích không?">
              <Select allowClear>
                {Object.entries(ratingMapping).map(([rateDiv, { text }]) => (
                  <Select.Option key={rateDiv} value={rateDiv}>
                    {text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="note" label="Ghi chú">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </Modal>
  );
};

export default WeanNoteModal;
