import React from 'react';
import classes from './Card.module.scss';
import img from '../../assets/images/project_roecy.png';

const Card = () => {
  return (
    <section className={classes.card_box}>
      <div className={classes.card_img_wrapper}>
        <img src={img} />
      </div>
      <div className={classes.card_text_wrapper}>
        <h1>제목</h1>
        <p>내용</p>
      </div>
    </section>
  );
};

export default Card;
