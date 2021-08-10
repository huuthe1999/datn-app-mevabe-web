// libs
import React from "react";
import { Button } from "antd";
// other
import "./style.scss";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { triggerFetchStory } from "@/actions/Stories";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const { next } = useSelector((state) => state.STORIES_REDUCER);

  return next?.page && next?.limit ? (
    <Button
      className="load-more-button-wrapper"
      type="link"
      block
      size="large"
      onClick={() => {
        dispatch(triggerFetchStory());
      }}
    >
      Xem thêm <ArrowDownOutlined />
    </Button>
  ) : null;
};

export default LoadMoreButton;
