import React, { useEffect, useContext } from 'react';
import FirstSlide from '../../components/IntroComp/FirstSlide';
import SecondSlide from '../../components/IntroComp/SecondSlide';
import ThirdSlide from '../../components/IntroComp/ThirdSlide';
import ScrollButton from '../../components/UI/Buttons/ScrollButton';
import NavContext from '../../context/nav-context';
import SLIDE_MOCK_DATA from '../../data/mock.json';
import classes from './Intro.module.scss';

const slide_data = SLIDE_MOCK_DATA.slide_data;

function Intro() {
  const { scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    document.getElementById('main_slideY').addEventListener('scroll', e => {
      scrollHandler(e.currentTarget.scrollTop);
    });
  }, []);

  return (
    <div className={classes.main_container} id="main_slideY">
      <section className={classes.slide_main_scroll_section}>
        <FirstSlide title={slide_data[0].title} text={slide_data[0].text} />
        <ScrollButton />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <SecondSlide title={slide_data[1].title} text={slide_data[1].text} />
        <ScrollButton />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <ThirdSlide title={slide_data[2].title} text={slide_data[2].text} />
      </section>
    </div>
  );
}

export default Intro;
