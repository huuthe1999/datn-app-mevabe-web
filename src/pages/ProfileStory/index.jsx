// libs
import { Formik } from "formik";
import React from "react";
import AddModal from "../Stories/mains/AddModal";
import LikerModal from "../Stories/mains/LikerModal";
import FetchUserStory from "./FetchUserStory";
import FilterStory from "./FilterStory";
import ResetReducer from "./ResetReducer";
import StoryList from "./StoryList";
// others
import "./style.scss";

const ProfileStory = () => (
  <Formik initialValues={{ filterChild: "all" }}>
    <div className="profile-story-wrapper stories-wrapper">
      <FilterStory />
      <StoryList />
      <FetchUserStory />
      <AddModal />
      <LikerModal />
      <ResetReducer />
    </div>
  </Formik>
);

export default ProfileStory;
