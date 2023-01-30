import React from 'react';
import FirstSlide from '../Slides/FirstSlide';
import SecondSlide from '../Slides/SecondSlide';
import styles from './Main.module.scss';

const data = [
  {
    id: 0,
    title: '출발점에서 정상을 바라볼 때',
    text: '막연함에 가장 처음드는 생각 \n내가 과연 저 산을 올라갈 수 있을까?',
  },
  {
    id: 1,
    title: '아 이거 뭐야',
    text: '사기 당한거 같은데',
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
