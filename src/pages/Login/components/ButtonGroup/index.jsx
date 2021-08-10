// libs
import React from "react";
// components
import FacebookButton from "../FacebookButton";
import GoogleButton from "../GoogleButton";
import SubmitButton from "../SubmitButton";
// others
import "./style.scss";

const ButtonGroup = ({ form }) => (
  <div className="button-group-wrapper">
    <SubmitButton form={form} />
    <GoogleButton />
    <FacebookButton />
  </div>
);

export default ButtonGroup;
