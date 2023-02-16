import React from 'react';
import classes from './IDream.module.scss';
import DayCounter from './DayCounter';
import NavButton from '../UI/NavButton';

const IDream = () => {
  return (
    <section className={classes.idream_container}>
      <div className={classes.counter_block}>
        그리고&nbsp;
        <DayCounter />
        &nbsp;+1 내일
      </div>
      <p>정상에 가까워지기 위해, 개발자가 되기 위해 오늘도 나아갑니다.</p>
    </section>
  );
};

export default IDream;
