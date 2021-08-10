// libs
import { setBaseComment } from "@/actions/StatusDetail";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const ReplyButton = ({ comment }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="link"
      size="small"
      key="reply"
      onClick={() => dispatch(setBaseComment(comment))}
    >
      Trả lời
    </Button>
  );
};

export default ReplyButton;
