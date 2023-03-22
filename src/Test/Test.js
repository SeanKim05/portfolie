import React, { useContext, useEffect } from 'react';
import ScrollUpButton from '../components/UI/Buttons/ScrollUpButton';
import classes from './Test.module.scss';

const Test = () => {
  return (
    <section className={classes.test_container}>
      <div className={classes.frame}>
        <ScrollUpButton />
      </div>
    </section>
  );
};

export default Test;
