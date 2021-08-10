// libs
import React from "react";
import createIcon from "@/assets/images/tracking/createMoment.svg";
import { Button } from "antd";
import { useDispatch } from "react-redux";
// actions
import { setShowStoriesModal } from "@/actions/Stories";
// others
import "./style.scss";
import { useChild } from "@/hooks";

const FloatButton = () => {
  const dispatch = useDispatch();
  const { children, currentChild } = useChild();

  return children[currentChild] ? (
    <Button
      className="float-button-wrapper"
      size="large"
      onClick={() =>
        dispatch(
          setShowStoriesModal({
            showModal: true,
          })
        )
      }
    >
      <img src={createIcon} alt="height icon" width={50} />
      <span>Tạo khoảnh khắc</span>
    </Button>
  ) : null;
};

export default FloatButton;
