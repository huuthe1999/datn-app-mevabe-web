// libs
import React from "react";
// others
import "./style.scss";
import SearchVaccin from "./ghosts/SearchVaccin";
import VaccinationList from "./mains/VaccinationList";
import VaccinModal from "./mains/VaccinModal";

const TrackingVaccin = () => (
  <div className="tracking-vaccin-wrapper">
    <VaccinationList />
    <VaccinModal />
    <SearchVaccin />
  </div>
);

export default TrackingVaccin;
