import React, { useEffect, useState } from 'react';
import classes from './DayCounter.module.scss';

const DayCounter = () => {
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    var d1 = new Date('August 1, 2022');
    var d2 = new Date();
    const time = Math.abs(d2 - d1);
    const timeToDate = Math.ceil(time / (1000 * 60 * 60 * 24));

    let dateToString = timeToDate.toString();
    setStartDate(dateToString);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.clock_wrapper}>
        시작으로 부터
        <span className={classes.clock_elem}>{startDate[0]}</span>
        <span className={classes.clock_elem}>{startDate[1]}</span>
        <span className={classes.clock_elem}>{startDate[2]}</span>일
      </div>
      <div>3개의 프로젝트 그리고 3개의 기업과제</div>
    </div>
  );
};

export default DayCounter;
