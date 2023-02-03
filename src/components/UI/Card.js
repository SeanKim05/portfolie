import React, { useState } from 'react';
import classes from './Card.module.scss';
import project_img from '../../assets/images/project_roecy.png';

const Card = () => {
  return (
    <div className={classes.card_wrapper}>
      <img src={project_img} alt="프로젝트 로이시" />
      <div className={classes.text_block}>
        <h1>사조의 공방</h1>
        <p>맞춤제작 전문 플랫폼 모두의 공방의 디자인을 참조하여</p>
      </div>
    </div>
  );
};

export default Card;
