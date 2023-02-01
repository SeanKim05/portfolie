import React from 'react';
import classes from './HashTag.module.scss';
import hash_img from '../../assets/images/hasg_img.jpg';

const HashTag = () => {
  return (
    <div className={classes.container}>
      <article className={classes.hashtag_wrapper}>
        <figure className={classes.img_block}>
          <img src={hash_img} />
          <figcaption>
            <h1>#저는 등린이 입니다</h1>
            <p>
              등산은 단순명료해서 좋습니다. 그저 한발자국 한발자국 앞으로 가기만
              하면 결국 정상에 도착할 테니까요 그렇게 도착하면 성공한거니까요.
            </p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
};

export default HashTag;
