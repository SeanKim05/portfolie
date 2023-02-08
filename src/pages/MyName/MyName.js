import React, { useContext, useEffect } from 'react';
import classes from './MyName.module.scss';
import NavContext from '../../context/nav-context';
import data from '../../data/mock.json';

const testImg = data.project[0].img_name;

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
];

const MyName = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <section className={classes.my_name_container}>
      <div className={classes.frame}>
        <img src={require(`../../assets/images/${testImg}`)} />
        <img src={TestData[1].url} />
        <img src={TestData[2].url} />
        <img src={TestData[1].url} />
        <img src={TestData[1].url} />
        <img src={TestData[0].url} />
        <img src={TestData[0].url} />
      </div>
    </section>
  );
};

export default MyName;
