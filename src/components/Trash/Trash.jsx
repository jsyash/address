/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Trash = ({ className }) => {
  return (
    <img
      className={`trash ${className}`}
      alt="Trash"
      src="https://generation-sessions.s3.amazonaws.com/3ef9da42e95202b7990bd96e8cc65689/img/trash-1.png"
    />
  );
};
