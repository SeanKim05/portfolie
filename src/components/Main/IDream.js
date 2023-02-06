import React from 'react';
import classes from './IDream.module.scss';
import DayCounter from './DayCounter';

const IDream = () => {
  return (
    <section className={classes.idream_container}>
      <div className={classes.counter_block}>
        그리고&nbsp;
        <DayCounter />
        &nbsp;+1 내일
      </div>
      {/* <p>정상에 가까워지기 위해 걸음을 옮기며</p> */}
    </section>
  );
};

export default IDream;
