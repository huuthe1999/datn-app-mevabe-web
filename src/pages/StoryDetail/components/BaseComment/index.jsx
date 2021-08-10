// libs
import { setBaseComment } from "@/actions/StoryDetail";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// others
import "./style.scss";

const BaseComment = () => {
  const {
    baseComment: { user, content },
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);
  const dispatch = useDispatch();

  return user ? (
    <div className="base-comment-wrapper">
      <div className="name">
        <strong>{user?.name}</strong>
        <Button
          icon={<CloseOutlined />}
          type="link"
          size="small"
          onClick={() => dispatch(setBaseComment({}))}
        />
      </div>
      <Typography.Paragraph ellipsis={{ rows: 1, expandable: false }}>
        {content}
      </Typography.Paragraph>
    </div>
  ) : null;
};

export default BaseComment;
