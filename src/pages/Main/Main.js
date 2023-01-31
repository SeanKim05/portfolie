import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';

const Main = () => {
  const navCtx = useContext(NavContext);
  console.log(navCtx);

  useEffect(() => {
    navCtx.scrollHandler();
  }, []);

  document.getElementById('mainY').addEventListener('scroll1', e => {
    navCtx.scrollHandler(e.currentTarget.scrollTop);
  });

  return (
    <div id="mainY" className={classes.body}>
      Main
    </div>
  );
};

export default Main;
