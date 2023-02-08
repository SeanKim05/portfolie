import { useState, useCallback, useEffect } from 'react';
import classes from './ImChangeComp.module.scss';
import { Link } from 'react-router-dom';
import NavButton from '../UI/NavButton';

function ImChangeComp({ personal_info_data }) {
  const [newName, setnewName] = useState('김유현');
  const [index, setIndex] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * personal_info_data.length);
    setIndex(personal_info_data[index].id);
    setnewName(personal_info_data[index].title);
  }, [personal_info_data]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className={classes.im_change_comp_container}>
      <section className={classes.contents_box}>
        <div className={classes.contents_wrapper}>
          <p>시작의 가치를 믿습니다.</p>
          <h1>안녕하세요 김유현입니다.</h1>
          <div className={classes.changing_text_block}>
            저는&nbsp;
            <h1 className={classes.im_text}>
              <Link to={`/hash_detail/${index}`}>{newName}</Link>
            </h1>
            &nbsp;입니다.
          </div>
          <div className={classes.hash_tag_block}>
            {personal_info_data.map(tags => (
              <ul key={tags.id}>
                <Link to={`/hash_detail/${tags.id}`}>#{tags.title}</Link>
              </ul>
            ))}
          </div>
          <p className={classes.introduce_text}>
            위 타이틀 저절로 타이틀은 없었습니다.
            <br />
            결국 시작과 노력이 있었기 때문에 얻을 수 있었던 타이틀입니다.
            <br />
            이번에는 개발자라는 타이틀을 얻기 위해 발걸음을 옮기는 중입니다.
          </p>
          <NavButton title="알아보기" />
        </div>
      </section>
    </div>
  );
}

export default ImChangeComp;
