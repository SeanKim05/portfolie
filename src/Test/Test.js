import React, { useContext, useEffect } from 'react';
import classes from './Test.module.scss';
import NavContext from '../context/nav-context';
import img from '../assets/images/project_roecy.png';
import img1 from '../assets/images/project_sajo.png';
import img2 from '../assets/images/project_haii.png';

const Test = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });
  return (
    <div id="test_slideY" className={classes.test_container}>
      <section
        className={classes.slide}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={classes.card_wrapper}>aa</div>
      </section>
      <section
        className={classes.slide}
        style={{ backgroundImage: `url(${img1})` }}
      >
        bbbb
      </section>
      <section
        className={classes.slide}
        style={{ backgroundImage: `url(${img2})` }}
      >
        cccc
      </section>
    </div>
  );
};

export default Test;
