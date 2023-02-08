import React, { useEffect, useContext } from 'react';
import FirstSlide from '../../components/SlidesComp/FirstSlide';
import SecondSlide from '../../components/SlidesComp/SecondSlide';
import ThirdSlide from '../../components/SlidesComp/ThirdSlide';
import NavContext from '../../context/nav-context';
import classes from './Slide.module.scss';

const slideData = [
  {
    id: 0,
    title: '정상에 오를 수 있을까?',
    text: [
      '매번 하는 그 걱정',
      '출발점에서 정상을 바라볼 때 막연함에 가장 처음드는 생각,\n등산을 처음하는 초보부터 에베레스트를 오르는 전문가까지 모두 가지는.',
    ],
  },
  {
    id: 1,
    title: '오를 수 있습니다.',
    text: [
      '첫 발자국을 남길 수 있다면,',
      '그 미약해보이는 시작과 발자국들이 \n모이고 모여서 결국 정상에 닿게 할 것이라는 믿습니다',
    ],
  },
  {
    id: 2,
    title: '시작하는 것의 가치',
    text: [
      '그것의 위대함을 믿고있고 소중하게 생각하기 때문에 \n정상에 가까워지기 위해서 오늘도 한 걸음 한 걸음 앞으로 나아갑니다.',
      '지금부터 개발자를 향한 제 여정을 소개합니다.',
    ],
  },
];

function Mainpage() {
  const { yScrollVal, scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    document.getElementById('main_slideY').addEventListener('scroll', e => {
      scrollHandler(e.currentTarget.scrollTop);
    });
  }, []);

  return (
    <div className={classes.main_container} id="main_slideY">
      <section className={classes.slide_main_scroll_section}>
        <FirstSlide title={slideData[0].title} text={slideData[0].text} />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <SecondSlide title={slideData[1].title} text={slideData[1].text} />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <ThirdSlide title={slideData[2].title} text={slideData[2].text} />
      </section>
    </div>
  );
}

export default Mainpage;
