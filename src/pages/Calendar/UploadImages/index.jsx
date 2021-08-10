// libs
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React from "react";
import ImagePreview from "../ImagePreview";
// others
import "./style.scss";

const UploadImages = ({ fileList, setFileList }) => (
  <div className="upload-images-wrapper">
    <Upload.Dragger
      name="images"
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
          onRemove={() => {
            setFileList(fileList.filter((f) => file?.uid !== f?.uid));
          }}
        />
      )}
    >
      <div className="upload-wrapper-inner">
        Thêm hình ảnh <PlusOutlined />
      </div>
    </Upload.Dragger>
  </div>
);

export default UploadImages;
