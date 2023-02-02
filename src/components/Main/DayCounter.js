import React, { useEffect, useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './DayCounter.module.scss';

const DayCounter = () => {
  const [startDate, setStartDate] = useState('');
  const [isStopped, setIsStopped] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let d1 = new Date('August 1, 2022');
    let d2 = new Date();
    const time = Math.abs(d2 - d1);
    const timeToDate = Math.ceil(time / (1000 * 60 * 60 * 24));

    let dateToString = timeToDate.toString();
    setStartDate(dateToString);
  }, []);

  const handleMouseEnter = () => {
    setIsStopped(true);
  };

  const handleMouseLeave = () => {
    setIsStopped(false);
  };

  return (
    <div className={classes.container}>
      <section className={classes.clock_wrapper}>
        시작으로 부터
        <span className={classes.clock_elem}>{startDate[0]}</span>
        <span className={classes.clock_elem}>{startDate[1]}</span>
        <span className={classes.clock_elem}>{startDate[2]}</span>일
      </section>

      <section className={classes.work_elem_wrapper}>
        <h1 className={classes.work_elem_title}>프로젝트와 기업과제</h1>
        <div
          className={classes.card_block}
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={classes.card_elem}>
            <Card />
          </li>
          <li className={classes.card_elem}>
            <Card />
          </li>
          <li className={classes.card_elem}>
            <Card />
          </li>
          <li className={classes.card_elem}>
            <Card />
          </li>
          <li className={classes.card_elem}>
            <Card />
          </li>
          <li className={classes.card_elem}>
            <Card />
          </li>
        </div>
      </section>
    </div>
  );
};

export default DayCounter;
