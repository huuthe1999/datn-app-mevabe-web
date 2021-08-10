// libs
import {
  DatePicker,
  Form,
  Input,
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
import { ratingMapping } from "@/dataSources/TrackingWean";
import {
  createActivity,
  refreshActivityList,
  setShowActivityModal,
  updateActivity,
} from "@/actions/TrackingActivity";
import { activeMapping } from "@/dataSources/TrackingActivity";
import { useFormikContext } from "formik";
import UploadImages from "../UploadImages";
import { uploadImages } from "@/actions/Stories";

const ActivityModal = () => {
  const [form] = Form.useForm();
  const { currentChild } = useChild();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const {
    showActivityModal,
    modalData: { activity, isLoading },
  } = useSelector((state) => state.TRACKING_ACTIVITY_REDUCER);
  const dispatch = useDispatch();

  const {
    values: { date: selectDate },
  } = useFormikContext();

  const onCancel = () => {
    dispatch(setShowActivityModal(false));
    setIsLoadingSubmit(false);
  };

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    form.resetFields();
    setFileList(
      (activity?.images || []).map((image) =>
        typeof image === "string" && image ? { uid: image, src: image } : image
      )
    );
  }, [form, activity, showActivityModal]);

  return (
    <Modal
      title={activity?._id ? "Cập nhật hoạt động" : "Thêm hoạt động"}
      visible={showActivityModal}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okButtonProps={{
        loading: isLoadingSubmit,
      }}
      centered
      okText={activity?._id ? "Cập nhật" : "Thêm"}
      cancelText="Hủy"
      className="activity-modal-wrapper"
      getContainer={() =>
        document.getElementsByClassName("calendar-wrapper")[0]
      }
    >
      <div className="activity-modal-wrapper-inner">
        <ChildInfo />
        <Spin spinning={isLoading}>
          <Form
            form={form}
            initialValues={{
              ...activity,
              date: activity?.date
                ? moment(new Date(activity.date))
                : selectDate,
              time: [
                activity?.startTime
                  ? moment(new Date(activity.startTime))
                  : selectDate,
                activity?.endTime
                  ? moment(new Date(activity.endTime))
                  : selectDate,
              ],
              active: Number.isInteger(activity.active)
                ? `${activity.active}`
                : activity.active,
              rating: Number.isInteger(activity.rating)
                ? `${activity.rating}`
                : activity.rating,
            }}
            layout="vertical"
            onFinish={(values) => {
              setIsLoadingSubmit(true);

              const handleSubmit = (images = []) => {
                const data = {
                  childId: currentChild,
                  ...values,
                  date: values.date.toDate().getTime(),
                  startTime: values.date
                    .clone()
                    .set("hour", values.time[0].get("hour"))
                    .set("minute", values.time[0].get("minute"))
                    .toDate()
                    .getTime(),
                  endTime: values.date
                    .clone()
                    .set("hour", values.time[1].get("hour"))
                    .set("minute", values.time[1].get("minute"))
                    .toDate()
                    .getTime(),
                  rating: Number(values.rating),
                  active: Number(values.active),
                  images,
                };
                if (activity?._id) {
                  dispatch(
                    updateActivity({
                      activityId: activity?._id,
                      data,
                      cbSuccess: () => {
                        message.success("Cập nhật hoạt động thành công!");
                        onCancel();
                        dispatch(refreshActivityList());
                      },
                      cbFinally: () => setIsLoadingSubmit(false),
                    })
                  );
                  return;
                }
                dispatch(
                  createActivity({
                    data,
                    cbSuccess: () => {
                      message.success("Thêm hoạt động thành công!");
                      onCancel();
                      dispatch(refreshActivityList());
                    },
                    cbFinally: () => setIsLoadingSubmit(false),
                  })
                );
              };

              if (
                fileList.length &&
                fileList.some((file) => typeof file?.src !== "string")
              ) {
                dispatch(
                  uploadImages({
                    data: {
                      images: fileList,
                    },
                    cbSuccess: (arrImg) => {
                      handleSubmit(arrImg);
                    },
                    cbError: () => {
                      setIsLoadingSubmit(false);
                    },
                  })
                );
              } else {
                handleSubmit(
                  fileList.length ? fileList.map((file) => file?.src) : []
                );
              }
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
                format="DD/MM/YYYY"
                showToday
              />
            </Form.Item>
            <Form.Item
              name="time"
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
              name="active"
              label="Hoạt động"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Select allowClear>
                {Object.entries(activeMapping).map(([activeDiv, text]) => (
                  <Select.Option key={activeDiv} value={activeDiv}>
                    {text}
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
            <UploadImages {...{ fileList, setFileList }} />
          </Form>
        </Spin>
      </div>
    </Modal>
  );
};

export default ActivityModal;
