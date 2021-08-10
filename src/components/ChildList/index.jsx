// libs
import React, { useState } from "react";
// components
import ChildAvatar from "./mains/ChildAvatar";
// hooks
import { useChild } from "@/hooks";
// others
import "./style.scss";

const ChildList = () => {
  const { children, currentChild } = useChild();
  const [isOpen, setIsOpen] = useState(false);

  return currentChild && children[currentChild] ? (
    <div
      className="child-list-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {Object.values(children)
        .filter(({ _id }) => _id !== currentChild)
        .map((child) => (
          <ChildAvatar
            key={child._id}
            {...{ childId: child._id, isOpen, setIsOpen }}
          />
        ))}
      <ChildAvatar
        isCurrent
        {...{ childId: currentChild, isOpen, setIsOpen }}
      />
    </div>
  ) : null;
};

export default ChildList;
