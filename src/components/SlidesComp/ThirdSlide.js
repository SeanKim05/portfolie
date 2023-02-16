import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavContext from '../../context/nav-context';
import NavButton from '../UI/NavButton';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = ({ title, text }) => {
  const [scrollReached, setScrollReached] = useState(false);

  const navigate = useNavigate();
  const goMain = () => {
    navigate('main');
  };
  const { yScrollVal } = useContext(NavContext);
  useEffect(() => {
    if (yScrollVal > 1100) {
      setScrollReached(true);
    }
  }, [yScrollVal]);

  return (
    <section className={classes.main_container}>
      {scrollReached && (
        <>
          <div className={classes.caption_wrapper}>
            <h1>{title}</h1>
            <p>{text[0]}</p>
            <h2>{text[1]}</h2>
            <NavButton title={'여정 둘러보기'} event={goMain} />
          </div>
          <div className={classes.caption_nav_button}></div>
        </>
      )}
    </section>
  );
};

export default ThirdSlide;
