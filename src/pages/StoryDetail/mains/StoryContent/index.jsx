// libs
import React, { useRef, useState } from "react";
// others
import "./style.scss";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useElementSize } from "@/hooks";

const StoryContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    status: { title },
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);
  const ref = useRef(null);
  const { height } = useElementSize(ref);

  return (
    <div className="story-content-wrapper">
      <div
        className={classNames("story-content-wrapper-inner", { collapsed })}
        ref={ref}
      >
        {title}
      </div>
      {height > 155 && (
        <div onClick={() => setCollapsed(!collapsed)} className="btn-expand">
          {!collapsed ? "Thu gọn" : "Xem thêm"}
        </div>
      )}
    </div>
  );
};

export default StoryContent;
