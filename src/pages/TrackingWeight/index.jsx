// libs
import React from "react";
import SearchWeightNotes from "./ghosts/SearchWeightNotes";
import WeightChart from "./mains/WeightChart";
import WeightNotesList from "./mains/WeightNotesList";
// others
import "./style.scss";
import HeightNoteModal from "./mains/WeightNoteModal";
import SearchStdWeight from "../ActivityTrack/ghosts/SearchStdWeight";

const TrackingWeight = () => (
  <div className="tracking-weight-wrapper">
    <WeightChart />
    <WeightNotesList />
    <SearchWeightNotes />
    <HeightNoteModal />
    <SearchStdWeight />
  </div>
);

export default TrackingWeight;
