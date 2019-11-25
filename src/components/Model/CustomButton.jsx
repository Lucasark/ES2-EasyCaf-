import React from "react";
import "./CustomButton.css";

export default props => {

  return (
    <button {...props} className={props.className+' botaoNovo'} style={props.style}>{props.btntext}</button>
  );

}