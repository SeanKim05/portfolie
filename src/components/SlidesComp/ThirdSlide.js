import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavContext from '../../context/nav-context';
import NavButton from '../UI/NavButton';
import classes from './ThirdSlide.module.scss';

const ThirdSlide = props => {
  const [scrollReached, setScrollReached] = useState(false);

  const navigate = useNavigate();
  const goMain = () => {
    navigate('main');
  };
  const navCtx = useContext(NavContext);
  useEffect(() => {
    if (navCtx.yScrollVal > 1500) {
      setScrollReached(true);
    }
  }, [navCtx.yScrollVal]);

  return (
    <section className={classes.main_container}>
      {scrollReached && (
        <div className={classes.caption_wrapper}>
          <div className={classes.animation_sliding}>
            <h1>{props.title}</h1>
          </div>
          <div className={classes.animation_sliding}>
            <p>{props.text[0]}</p>
          </div>
          <div className={classes.animation_sliding}>
            <h2>{props.text[1]}</h2>
          </div>
        </div>
      )}
      <NavButton title={'여정 둘러보기'} event={goMain} />
    </section>
  );
};

export default ThirdSlide;
