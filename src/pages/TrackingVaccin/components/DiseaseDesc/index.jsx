// libs
import React from "react";
// others
import "./style.scss";

const DiseaseDesc = ({ diseaseDescription, content, sideEffects }) => (
  <div className="disease-desc-wrapper">
    <h3>Mô tả:</h3>
    <p>{diseaseDescription}</p>
    <h3>Hướng dẫn:</h3>
    <p className="pre">{content}</p>
    <h3>Tác dụng phụ:</h3>
    <p>{sideEffects}</p>
  </div>
);

export default DiseaseDesc;
