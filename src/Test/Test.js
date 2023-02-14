import React, { useContext, useEffect } from 'react';
import classes from './Test.module.scss';

const Test = () => {
  return (
    <section className={classes.test_container}>
      <div className={classes.frame}>
        <div className={classes.scroll_button_wrapper}>
          <div className={classes.scroll_text}>Scroll Down</div>
          <div className={classes.scroll_down}></div>
        </div>
      </div>
    </section>
  );
};

export default Test;
