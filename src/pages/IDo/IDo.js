import React from 'react';
import classes from './IDo.module.scss';
import Card from '../../components/IDoComp/Card';

const IDo = () => {
  return (
    <div className={classes.i_do_container}>
      <section className={classes.i_do_title_section}>
        <h1>Project</h1>
      </section>
      <section className={classes.i_do_card_section}>
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default IDo;
