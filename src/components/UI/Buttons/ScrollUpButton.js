import React from 'react';
import classes from './ScrollUpButton.module.scss';

const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.scroll_button_wrapper}>
      <section className={classes.scroll_button_section} onClick={handleClick}>
        <div className={classes.scroll_text}>Click to Top</div>
        <div className={classes.scroll_to_top}></div>
      </section>
    </div>
  );
};

export default ScrollUpButton;
