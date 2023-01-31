import React, { useState, useEffect } from 'react';
import FirstSlide from '../../components/Slides/FirstSlide';
import SecondSlide from '../../components/Slides/SecondSlide';
import styles from './Main.module.scss';

const data = [
  {
    id: 0,
    title: '정상에 오를 수 있을까?',
    text: [
      '모든 사람이 하는 걱정',
      '출발점에서 정상을 바라볼 때 막연함에 가장 처음드는 생각,\n등산을 처음하는 초보부터 에베레스트를 오르는 전문가까지 모두 가지는.',
    ],
  },
  {
    id: 1,
    title: '첫 발자국을 남길 수 있다면',
    text: [
      '결국 정상에 오를 수 있습니다. \n그 미약해보이는 발자국들이 모이면\n결국 정상에 닿게 할 것이라는 것을',
      '믿습니다.',
    ],
  },
];

function Mainpage() {
  return (
    <div className={styles.main_container}>
      <section>
        <FirstSlide title={data[0].title} text={data[0].text} />
      </section>
      <section>
        <SecondSlide title={data[1].title} text={data[1].text} />
      </section>
    </div>
  );
}

export default Mainpage;
