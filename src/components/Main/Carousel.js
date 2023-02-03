import React from 'react';
import carousel_img from '../../assets/images/project_roecy.png';
import classes from './Carousel.module.scss';
const Carousel = () => {
  return (
    <section>
      <div className={classes.slider}>
        <div className={classes.slide_track}>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>1</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>2</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>3</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>4</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>5</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>6</p>
          </div>

          {/* double */}

          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>1</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>2</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>3</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>4</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>5</p>
          </div>
          <div className={classes.slide}>
            <img src={carousel_img} />
            <p>6</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
