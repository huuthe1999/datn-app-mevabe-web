// libs
import { Image } from "antd";
import React from "react";
// others
import "./style.scss";

const CommentImage = ({ images }) => {
  const [first, ...rest] = images || [];

  return (images || []).length ? (
    <div className="comment-image-wrapper">
      <Image.PreviewGroup>
        <Image
          src={first}
          preview={{
            mask: <span>{rest.length ? `+${rest.length}` : ""}</span>,
            visible: false,
          }}
        />
        {(rest || []).map((img) => (
          <Image src={img} key={img} style={{ display: "none" }} />
        ))}
      </Image.PreviewGroup>
    </div>
  ) : null;
};

export default CommentImage;
