// libs
import { Button } from "antd";
import React from "react";

// others
import "./style.scss";

const ShowReplyButton = ({
  handleHideSubComment,
  showReply,
  subComments,
  handleShowSubComments,
}) =>
  subComments.length ? (
    <Button
      type="link"
      size="small"
      key="showReply"
      onClick={showReply ? handleHideSubComment : handleShowSubComments}
    >
      {showReply
        ? `Ẩn ${subComments.length} phản hồi`
        : `${subComments.length} phản hồi`}
    </Button>
  ) : null;

export default ShowReplyButton;
