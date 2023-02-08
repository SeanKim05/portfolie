import React, { useContext, useEffect } from 'react';
import classes from './IDo.module.scss';
import NavContext from '../../context/nav-context';

const TestData = [
  {
    title: 'Roecy',
    text: 'Justcode 1차 프로젝트',
    url: require('../../assets/images/project_roecy.png'),
  },
  {
    title: '4조의 공방',
    text: 'Justcode 2차 프로젝트',
    url: require('../../assets/images/project_sajo.png'),
  },
  {
    title: 'HAII',
    text: 'HAII 기업협업 과제',
    url: require('../../assets/images/project_haii.png'),
  },
  {
    title: 'Winning-I',
    text: 'Winning 기업협업 과제',
    url: require('../../assets/images/project_winningi.png'),
  },
  {
    title: 'Bodit',
    text: 'Bodit 기업협업 과제',
    url: require('../../assets/images/project_bodit.png'),
  },
];

const IDo = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <div id="test_slideY" className={classes.ido_container}>
      {TestData.map(slide => (
        <section
          className={classes.ido_slide}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
          <div className={classes.ido_card_wrapper}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default IDo;
