import React, { useContext, useEffect } from 'react';
import classes from './IDo.module.scss';
import NavContext from '../../context/nav-context';
import IDoFrame from '../../components/IDoComp/IDoFrame';
import PROJECT_MOCKDATA from '../../data/mock.json';
import ScrollButton from '../../components/UI/Buttons/ScrollButton';

const project_data = PROJECT_MOCKDATA.project;

const IDo = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <section id="test_slideY" className={classes.ido_container}>
      <IDoFrame project_data={project_data} />
      <div className={classes.Scroll_button}>
        <ScrollButton />
      </div>
    </section>
  );
};

export default IDo;
