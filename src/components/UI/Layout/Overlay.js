import React from "react";
import classes from "./Overlay.module.scss";
const Overlay = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

export default Overlay;
