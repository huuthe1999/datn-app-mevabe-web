// libs
import React, { useEffect, useState } from "react";
import { Image } from "antd";
// others
import "./style.scss";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImagePreview = ({ file, onRemove }) => {
  const [src, setSrc] = useState();

  useEffect(() => {
    if (typeof file === "string") {
      setSrc(file);
      return;
    }
    getBase64(file).then((result) => setSrc(result));
  }, [file]);

  return (
    <div className="image-preview-wrapper">
      <Image
        src={src}
        preview={{
          mask: (
            <div className="image-preview-mask">
              <EyeOutlined />
              <DeleteOutlined
                onClick={(e) => {
                  onRemove();
                  e.stopPropagation();
                }}
              />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default ImagePreview;
