import React, { useContext, useEffect, useState } from 'react';
import classes from './IDo.module.scss';
import NavContext from '../../context/nav-context';
import IDoFrame from '../../components/IDoComp/IDoFrame';
import PROJECT_MOCKDATA from '../../data/mock.json';
import ScrollButton from '../../components/UI/Buttons/ScrollButton';

const project_data = PROJECT_MOCKDATA.project;

const IDo = () => {
  const navCtx = useContext(NavContext);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <>
      <div className={classes.progress_bar_wrapper}>
        <div
          className={classes.progress_bar}
          style={{ width: `${scrollTop}%` }}
        />
      </div>
      <section id="test_slideY" className={classes.ido_container}>
        <IDoFrame project_data={project_data} />
        <div className={classes.Scroll_button}>
          <ScrollButton />
        </div>
      </section>
    </>
  );
};

export default IDo;
