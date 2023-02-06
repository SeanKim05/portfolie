import React, { useEffect, useState } from 'react';
import classes from './DayCounter.module.scss';

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
    <div className={classes.conter}>
      <span className={classes.counter_elem}>{startDate[0]}</span>
      <span className={classes.counter_elem}>{startDate[1]}</span>
      <span className={classes.counter_elem}>{startDate[2]}</span>
    </div>
  );
};

export default DayCounter;
