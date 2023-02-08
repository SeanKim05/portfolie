import React, { useContext, useEffect } from 'react';
import classes from './Test.module.scss';
import NavContext from '../context/nav-context';
import data from '../data/mock.json';

console.log(typeof data.project[0].url);
const testImg = data.project[0].url;

console.log(testImg);

const TestData = [
  {
    title: 'Roecy',
    text: 'Justcode 1차 프로젝트',
    url: require('../assets/images/project_roecy.png'),
  },
  {
    title: '4조의 공방',
    text: 'Justcode 2차 프로젝트',
    url: require('../assets/images/project_sajo.png'),
  },
  {
    title: 'HAII',
    text: 'HAII 기업협업 과제',
    url: require('../assets/images/project_haii.png'),
  },
];

const Test = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <section className={classes.test_container}>
      <div className={classes.frame}>
        <img src={testImg} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
      </div>
    </section>
  );
};

export default Test;
