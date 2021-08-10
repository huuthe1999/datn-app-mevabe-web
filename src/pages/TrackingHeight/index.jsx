// libs
import React from "react";
import SearchHeightNotes from "./ghosts/SearchHeightNotes";
import HeightChart from "./mains/HeightChart";
import HeightNotesList from "./mains/HeightNotesList";
// others
import "./style.scss";
import HeightNoteModal from "./mains/HeightNoteModal";
import SearchStdHeight from "../ActivityTrack/ghosts/SearchStdHeight";

const TrackingHeight = () => (
  <div className="tracking-height-wrapper">
    <HeightChart />
    <HeightNotesList />
    <SearchHeightNotes />
    <HeightNoteModal />
    <SearchStdHeight />
  </div>
);

export default TrackingHeight;
