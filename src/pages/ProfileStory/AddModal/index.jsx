// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, message, Modal, Spin, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// actions
import { updateStory, uploadImages, uploadStory } from "@/actions/Stories";
// others
import CONSTANTS from "@/constants";
import "./style.scss";
import { useChild, useRouter } from "@/hooks";
import ImagePreview from "../ImagePreview";
import {
  fetchStoryDetail,
  setShowStoryModal,
  updateModalData,
} from "@/actions/ProfileStory";

const {
  FIELD_NAMES: {
    STORIES: { CAPTION, IMAGES },
  },
} = CONSTANTS;

const AddModal = () => {
  const {
    showStoryModal,
    modalData: { title, images, _id },
  } = useSelector((state) => state.PROFILE_STORY_REDUCER);
  const { currentChild } = useChild();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCancel = () => {
    dispatch(setShowStoryModal(false));
    form.resetFields();
    setFileList([]);
  };

  useEffect(() => {
    if (showStoryModal && _id) {
      setIsLoading(true);
      dispatch(
        fetchStoryDetail({
          statusId: _id,
          cbSuccess: ({ status }) => dispatch(updateModalData(status)),
          cbFinally: () => setIsLoading(false),
        })
      );
    }
  }, [_id, dispatch, showStoryModal]);

  useEffect(() => {
    form.setFieldsValue({
      [CAPTION]: title || "",
    });
    setFileList(images || []);
  }, [form, images, title]);

  return (
    <Modal
      title={`${_id ? "Cập nhật" : "Đăng"} khoảnh khắc`}
      visible={showStoryModal}
      onCancel={onCancel}
      destroyOnClose
      okButtonProps={{
        onClick: () => form.submit(),
        loading: isSubmit,
      }}
      okText={`${_id ? "Cập nhật" : "Đăng"} khoảnh khắc`}
      cancelText="Hủy"
    >
      <div className="add-modal-wrapper">
        <Spin spinning={isLoading}>
          <Form
            form={form}
            onFinish={(values) => {
              const handleSubmitStory = (arrImg) => {
                setIsSubmit(true);
                dispatch(
                  (_id ? updateStory : uploadStory)({
                    statusId: _id,
                    childId: currentChild,
                    data: {
                      title: values[CAPTION],
                      description: "description",
                      arrImg,
                    },
                    cbSuccess: ({ status }) => {
                      if (_id) {
                        message.success("Cập nhật khoảnh khắc thành công");
                      } else {
                        message.success("Đăng khoảnh khắc thành công");
                      }
                      onCancel();
                      if (status?._id) {
                        router.push({
                          pathname: `${CONSTANTS.ROUTERS.STORIES}/${status?._id}`,
                          state: {
                            background: router.location,
                            hasImage: (status?.images || []).length,
                          },
                        });
                      }
                    },
                    cbFinally: () => setIsSubmit(false),
                  })
                );
              };

              if (
                fileList.length &&
                fileList.some((file) => typeof file !== "string")
              ) {
                dispatch(
                  uploadImages({
                    data: {
                      images: fileList,
                    },
                    cbSuccess: (arrImg) => {
                      handleSubmitStory(arrImg);
                    },
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
        </Spin>
      </div>
    </Modal>
  );
};
export default AddModal;
