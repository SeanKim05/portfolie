import React from 'react';
import carousel_img from '../../assets/images/project_roecy.png';
import classes from './Carousel.module.scss';
const Carousel = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.slide_track}>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
        <div className={classes.slide}>
          <img src={carousel_img} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
