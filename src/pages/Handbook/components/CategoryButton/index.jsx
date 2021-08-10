// libs
import CONSTANTS from "@/constants";
import { useRouter } from "@/hooks";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const CategoryButton = ({ category: { name, _id, thumbnail } = {} }) => {
  const router = useRouter();
  const filteredCategory = router.query.get("category");

  return (
    <Link
      to={`${CONSTANTS.ROUTERS.HANDBOOK}?category=${_id}`}
      className="category-button-wrapper"
    >
      <div
        className={classNames("category-button-wrapper-inner", {
          active: _id === filteredCategory,
        })}
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <div className="category-name">{name}</div>
      </div>
    </Link>
  );
};

export default CategoryButton;
