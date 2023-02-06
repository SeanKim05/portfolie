import React, { useEffect, useState, useRef } from 'react';
import Carousel from './Carousel';
import classes from './DayCounter.module.scss';
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiSass,
  SiGit,
} from 'react-icons/si';

const DayCounter = () => {
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    let d1 = new Date('August 1, 2022');
    let d2 = new Date();
    const time = Math.abs(d2 - d1);
    const timeToDate = Math.ceil(time / (1000 * 60 * 60 * 24));

    let dateToString = timeToDate.toString();
    setStartDate(dateToString);
  }, []);

  return (
    <div className={classes.container}>
      <section className={classes.clock_wrapper}>
        시작으로 부터
        <span className={classes.clock_elem}>{startDate[0]}</span>
        <span className={classes.clock_elem}>{startDate[1]}</span>
        <span className={classes.clock_elem}>{startDate[2]}</span>
        <span>일</span>
      </section>

      <section className={classes.work_elem_wrapper}>
        <div className={classes.work_elem_icons_block}>
          <p>다양한 기술스택으로 빌드 된</p>
          <div>
            <SiHtml5 color="rgb(255, 87, 51)" />
            <SiCss3 color="rgb(38, 77, 228)" />
            <SiJavascript color="rgb(240, 219, 79" />
            <SiReact color="rgb(74, 216, 255)" />
            <SiSass color="rgb(204, 102, 153)" />
            <SiGit color="rgb(243, 79, 41)" />
          </div>
        </div>
        <h1 className={classes.work_elem_title}>프로젝트와 기업과제</h1>
        <div className={classes.carousel_block}>
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default DayCounter;
