import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavContext from '../../context/nav-context';
import NavButton from '../NavButton';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = props => {
  const [scrollReached, setScrollReached] = useState('');

  const navigate = useNavigate();
  const goMain = () => {
    navigate('main');
  };
  const navCtx = useContext(NavContext);
  useEffect(() => {
    if (navCtx.yScrollVal >= 2000) {
      setScrollReached(true);
    }
  });

  return (
    <section className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text[0]}</p>
        {scrollReached && (
          <h2 className={classes.animation_sliding}>{props.text[1]}</h2>
        )}
      </div>
      <NavButton title={'여정 둘러보기'} event={goMain} />
    </section>
  );
};

export default ThirdSlide;
