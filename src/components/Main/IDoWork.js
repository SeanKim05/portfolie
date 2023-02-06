import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import NavButton from '../UI/NavButton';
import classes from './IDoWork.module.scss';
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiSass,
  SiGit,
} from 'react-icons/si';
import DayCounter from './DayCounter';

const IDoWork = () => {
  return (
    <div className={classes.day_counter_container}>
      <section className={classes.counter_box}>
        <div className={classes.counter_wrapper}>
          <div className={classes.counter_block}>
            첫 발자국을 남긴지 &nbsp;
            <DayCounter />일
          </div>
          <div className={classes.icons_block}>
            <p>정상을 향한 한 걸음 한 걸음 필수 기술스택을 적용한</p>
            <div>
              <SiHtml5 color="rgb(255, 87, 51)" />
              <SiCss3 color="rgb(38, 77, 228)" />
              <SiJavascript color="rgb(240, 219, 79" />
              <SiReact color="rgb(74, 216, 255)" />
              <SiSass color="rgb(204, 102, 153)" />
              <SiGit color="rgb(243, 79, 41)" />
            </div>
            <h1>프로젝트와 기업과제</h1>
            <NavButton title="구경가기" />
          </div>
        </div>
      </section>
      <section className={classes.work_elem_wrapper}>
        <Carousel />
      </section>
    </div>
  );
};

export default IDoWork;
