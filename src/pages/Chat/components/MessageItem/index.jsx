// libs
import { Image, Typography } from "antd";
import classNames from "classnames";
import React from "react";
// others
import "./style.scss";

const MessageItem = ({ content, isYou, isFail, media }) => (
  <div className={classNames("message-item-wrapper", { isYou, isFail })}>
    {content && (
      <div
        className={classNames("message-item-wrapper-inner", { isYou, isFail })}
      >
        {content}
      </div>
    )}
    {(media || []).length ? (
      <div className={classNames("media-wrapper", { isYou })}>
        <Image.PreviewGroup>
          {(media || []).map((image) => (
            <Image src={image} key={image} />
          ))}
        </Image.PreviewGroup>
      </div>
    ) : null}

    {isFail && (
      <div className={classNames("message-fail-wrapper", { isYou, isFail })}>
        <Typography.Text type="danger">Tin nhắn không gửi được</Typography.Text>
      </div>
    )}
  </div>
);

export default MessageItem;
