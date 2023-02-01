import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';
import ImChangeComp from '../../components/Main/ImChangeComp';
import MOCK_DATA from '../../data/mock.json';

const hashtags = MOCK_DATA.hashtags;

// const hashtags = [
//   { id: 0, tag: '엔지니어' },
//   { id: 1, tag: '졸업반' },
//   { id: 2, tag: '산업기사' },
//   { id: 3, tag: '등린이' },
//   { id: 4, tag: '사진쟁이' },
// ];

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
        <ImChangeComp hashtags={hashtags} />
      </div>
    </>
  );
};

export default Main;
