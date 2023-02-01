import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';
import ImChangeComp from '../../components/Main/ImChangeComp';

const Main = () => {
  const navCtx = useContext(NavContext);
  useEffect(() => {
    window.scrollTo(0, 1);
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      navCtx.scrollHandler(value);
    });
  }, []);

  return (
    <>
      <div className={classes.body}>
        <ImChangeComp />
      </div>
    </>
  );
};

export default Main;
