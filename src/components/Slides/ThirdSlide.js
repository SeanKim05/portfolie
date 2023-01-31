import React from 'react';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = props => {
  return (
    <section className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default ThirdSlide;
