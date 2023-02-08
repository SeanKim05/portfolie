import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';
import ImChangeComp from '../../components/MainComp/ImChangeComp';
import WorkCarousel from '../../components/MainComp/WorkCarousel';
import MOCK_DATA from '../../data/mock.json';
import IDream from '../../components/MainComp/IDream';

const personal_info_data = MOCK_DATA.personal_info;

const Main = () => {
  const { scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    document.getElementById('main_Y').addEventListener('scroll', e => {
      scrollHandler(e.currentTarget.scrollTop);
    });
  }, []);

  return (
    <>
      <div id="main_Y" className={classes.main_container}>
        <section className={classes.main_scroll_section}>
          <ImChangeComp personal_info_data={personal_info_data} />
        </section>
        <section className={classes.main_scroll_section}>
          <WorkCarousel />
        </section>
        <section className={classes.main_scroll_section}>
          <IDream />
        </section>
      </div>
    </>
  );
};

export default Main;
