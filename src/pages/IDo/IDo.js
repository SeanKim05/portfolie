import React, { useContext, useEffect } from 'react';
import classes from './IDo.module.scss';
import NavContext from '../../context/nav-context';
import IDoFrame from '../../components/IDoComp/IDoFrame';
import ScrollButton from '../../components/UI/Buttons/ScrollButton';

const IDo = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <section id="test_slideY" className={classes.ido_container}>
      <IDoFrame />
      <div className={classes.Scroll_button}>
        <ScrollButton />
      </div>
    </section>
  );
};

export default IDo;
