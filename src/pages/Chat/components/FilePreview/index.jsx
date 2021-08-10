// libs
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useFormikContext } from "formik";
import React from "react";
import ImagePreview from "../ImagePreview";
// others
import "./style.scss";

const FilePreview = () => {
  const {
    values: { fileList },
    setFieldValue,
  } = useFormikContext();

  return (
    <div className="file-preview-wrapper">
      {fileList.map((file) => (
        <ImagePreview
          file={file}
          key={file.uid}
          onRemove={() =>
            setFieldValue(
              "fileList",
              fileList.filter(({ uid }) => file.uid !== uid)
            )
          }
        />
      ))}

      {fileList.length ? (
        <Button
          type="link"
          icon={<CloseOutlined />}
          onClick={() => setFieldValue("fileList", [])}
        />
      ) : null}
    </div>
  );
};

export default FilePreview;
