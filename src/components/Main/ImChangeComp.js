import { useState, useCallback, useEffect } from 'react';
import classes from './ImChangeComp.module.scss';
import my_img from '../../assets/images/my_img.jpg';
import { Link, useNavigate } from 'react-router-dom';

function ImChangeComp({ hashtags }) {
  const [newName, setnewName] = useState('김유현');
  const [index, setIndex] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * hashtags.length);
    setIndex(hashtags[index].id);
    setnewName(hashtags[index].tag);
  }, [hashtags]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className={classes.container}>
      <section className={classes.contents_wrapper}>
        <h1>안녕하세요 김유현입니다.</h1>
        <div className={classes.changing_text_block}>
          저는&nbsp;
          <h1 className={classes.im_text}>
            <Link to={`/hash_detail/${index}`}>{newName}</Link>
          </h1>
          &nbsp;입니다.
        </div>
        <div className={classes.hash_tag_block}>
          {hashtags.map(tags => (
            <ul key={tags.id}>
              <Link to={`/hash_detail/${tags.id}`}>#{tags.tag}</Link>
            </ul>
          ))}
        </div>
        <p className={classes.introduce_text}>
          위 타이틀 저절로 타이틀은 없었습니다.
          <br />
          결국 시작과 노력이 있었기 때문에 얻을 수 있었던 타이틀입니다.
          <br />
          이번에는 개발자라는 타이틀을 얻고자 노력하고 있습니다.
        </p>
      </section>
    </div>
  );
}

export default ImChangeComp;
