// libs
import React from "react";
import SearchWeanNotes from "./ghosts/SearchWeanNotes";
import WeanNotesList from "./mains/WeanNotesList";
// others
import "./style.scss";
import WeanNoteModal from "./mains/WeanNoteModal";

const TrackingWean = () => (
  <div className="tracking-wean-wrapper">
    <WeanNotesList />
    <SearchWeanNotes />
    <WeanNoteModal />
  </div>
);

export default TrackingWean;
