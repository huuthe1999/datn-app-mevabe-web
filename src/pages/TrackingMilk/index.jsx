// libs
import React from "react";
import SearchMilkNotes from "./ghosts/SearchMilkNotes";
import MilkChart from "./mains/MilkChart";
import MilkNotesList from "./mains/MilkNotesList";
// others
import "./style.scss";
import MilkNoteModal from "./mains/MilkNoteModal";

const TrackingMilk = () => (
  <div className="tracking-milk-wrapper">
    <MilkChart />
    <MilkNotesList />
    <SearchMilkNotes />
    <MilkNoteModal />
  </div>
);

export default TrackingMilk;
