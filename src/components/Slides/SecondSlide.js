import React from 'react';
import classes from './SecondSlide.module.scss';
import caption_img from '../../assets/images/hiking.jpg';

const SecondSlide = props => {
  return (
    <section className={classes.main_container}>
      <figure className={classes.slide_figure}>
        <img className={classes.img_wrapper} src={caption_img} alt="등산" />
        <figcaption className={classes.caption_wrapper}>
          <h1>{props.title}</h1>
          <h2>{props.text[0]}</h2>
          <p>{props.text[1]}</p>
        </figcaption>
      </figure>
    </section>
  );
};

export default SecondSlide;
