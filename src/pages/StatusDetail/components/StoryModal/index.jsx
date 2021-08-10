// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, message, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// actions
import { uploadImages } from "@/actions/Stories";
// others
import CONSTANTS from "@/constants";
import "./style.scss";
import ImagePreview from "../ImagePreview";
import { refreshStoryDetail, updateStory } from "@/actions/StatusDetail";

const {
  FIELD_NAMES: {
    STORIES: { CAPTION, IMAGES },
  },
} = CONSTANTS;

const StoryModal = ({ showUpdateModal, setShowUpdateModal }) => {
  const {
    status: { title, images, _id },
  } = useSelector((state) => state.STATUS_DETAIL_REDUCER);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onCancel = () => {
    setShowUpdateModal(false);
    setFileList([]);
  };

  useEffect(() => {
    if (showUpdateModal) {
      form.setFieldsValue({
        [CAPTION]: title || "",
      });
      setFileList(images || []);
    }
  }, [form, images, showUpdateModal, title]);

  return (
    <Modal
      title="Cập nhật khoảnh khắc"
      visible={showUpdateModal}
      onCancel={onCancel}
      destroyOnClose
      okButtonProps={{
        onClick: () => form.submit(),
        loading: isLoading,
      }}
      okText="Cập nhật khoảnh khắc"
      cancelText="Hủy"
    >
      <div className="story-modal-wrapper">
        <Form
          form={form}
          onFinish={(values) => {
            const handleSubmitStory = (arrImg) => {
              setIsLoading(true);
              dispatch(
                updateStory({
                  statusId: _id,
                  data: {
                    title: values[CAPTION],
                    description: "description",
                    arrImg,
                  },
                  cbSuccess: () => {
                    message.success("Cập nhật khoảnh khắc thành công");
                    onCancel();
                    dispatch(refreshStoryDetail());
                  },
                  cbFinally: () => setIsLoading(false),
                })
              );
            };

            if (
              fileList.length &&
              fileList.some((file) => typeof file !== "string")
            ) {
              setIsLoading(true);
              dispatch(
                uploadImages({
                  data: {
                    images: fileList,
                  },
                  cbSuccess: (arrImg) => {
                    handleSubmitStory(arrImg);
                  },
                  cbError: () => setIsLoading(false),
                })
              );
            } else {
              handleSubmitStory(fileList);
            }
          }}
        >
          <Form.Item
            name={CAPTION}
            rules={[
              { required: true, message: "Nội dung không được để trống" },
            ]}
          >
            <Input.TextArea rows={5} placeholder="Chia sẻ của bạn..." />
          </Form.Item>
          <Upload.Dragger
            name={IMAGES}
            multiple
            showUploadList
            fileList={fileList}
            accept="image/*"
            beforeUpload={(file, fileList) => {
              setFileList(fileList);
              return false;
            }}
            listType="picture-card"
            itemRender={(originNode, file) => (
              <ImagePreview
                file={file}
                onRemove={() =>
                  setFileList(fileList.filter(({ uid }) => file.uid !== uid))
                }
              />
            )}
          >
            <div className="upload-wrapper-inner">
              Thêm hình ảnh <PlusOutlined />
            </div>
          </Upload.Dragger>
        </Form>
      </div>
    </Modal>
  );
};
export default StoryModal;
