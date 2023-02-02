import React, { useContext, useEffect } from 'react';
import classes from './Main.module.scss';
import NavContext from '../../context/nav-context';
import ImChangeComp from '../../components/Main/ImChangeComp';
import DayCounter from '../../components/Main/DayCounter';
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
    document.getElementById('main_Y').addEventListener('scroll', e => {
      navCtx.scrollHandler(e.currentTarget.scrollTop);
    });
  });

  return (
    <>
      <div id="main_Y" className={classes.main_container}>
        <section>
          <ImChangeComp hashtags={hashtags} />
        </section>
        <section>
          <DayCounter />
        </section>
      </div>
    </>
  );
};

export default Main;
