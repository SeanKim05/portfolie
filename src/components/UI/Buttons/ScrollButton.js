import React from "react";
import classes from "./ScrollButton.module.scss";

const ScrollButton = () => {
  return (
    <div className={classes.scroll_button_wrapper}>
      <div className={classes.scroll_text}>Scroll Down</div>
      <div className={classes.scroll_down}></div>
    </div>
  );
};

export default ScrollButton;
