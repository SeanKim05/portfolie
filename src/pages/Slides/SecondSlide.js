import React from 'react';
import classes from './SecondSlide.module.scss';

const SecondSlide = props => {
  let mainText = document.getElementsByClassName('classes.main_container');

  window.addEventListener('scroll', function () {
    let yScrollVal = window.scrollY;
    console.log('갑', yScrollVal);
  });
  return (
    <div className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SecondSlide;
