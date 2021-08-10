// libs
import React from "react";
import { useSelector } from "react-redux";
import CategoryButton from "../../components/CategoryButton";
import CategorySkeleton from "../../components/CategorySkeleton";
// others
import "./style.scss";

const CategoryList = () => {
  const { categories, isLoadingCate } = useSelector(
    (state) => state.HANDBOOK_REDUCER
  );

  return (
    <div className="category-list-wrapper">
      {isLoadingCate
        ? [...Array(3).keys()].map((index) => <CategorySkeleton key={index} />)
        : categories.map((category) => (
            <CategoryButton category={category} key={category._id} />
          ))}
    </div>
  );
};

export default CategoryList;
