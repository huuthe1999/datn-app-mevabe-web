// libs
import React from "react";
// components
import StoriesHeader from "./mains/StoriesHeader";
import StoryList from "./mains/StoryList";
import FetchStoryList from "./ghosts/FetchStoryList";
import FloatButton from "./mains/FloatButton";
import AddModal from "./mains/AddModal";
import LikerModal from "./mains/LikerModal";
// others
import "./style.scss";
import LoadMoreButton from "./mains/LoadMoreButton";
import MainSpinner from "@/components/MainSpinner";
import { useAuth } from "@/hooks";

const Stories = () => {
  const { isAuthenticating } = useAuth();
  if (isAuthenticating) return <MainSpinner />;

  return (
    <div className="stories-wrapper">
      <div className="stories-wrapper-inner">
        <StoriesHeader />
        <StoryList />
        <LoadMoreButton />
      </div>
      <FloatButton />
      <FetchStoryList />
      <AddModal />
      <LikerModal />
    </div>
  );
};

export default Stories;
