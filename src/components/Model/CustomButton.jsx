import React, { Component } from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";
import PropTypes from "prop-types";
import "./CustomButton.css";

export default props => {

  return (
    <button {...props} className={props.className+' botaoNovo'} style={props.style}>{props.btntext}</button>
  );

}