// libs
import React from "react";
// others
import "./style.scss";
import SearchHandbook from "./ghosts/SearchHandbook";
import HandbookList from "./mains/HandbookList";
import CategoryList from "./mains/CategoryList";
import HandbookPagination from "./mains/HandbookPagination";
import RecommendList from "./mains/RecommendList";

const Handbook = () => (
  <div className="handbook-wrapper">
    <CategoryList />
    <HandbookList />
    <SearchHandbook />
    <HandbookPagination />
    <RecommendList />
  </div>
);

export default Handbook;
