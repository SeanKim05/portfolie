import React from 'react';
import classes from './HashTag.module.scss';
import hash_img from '../../assets/images/hasg_img.jpg';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../../data/mock.json';

const HashTag = () => {
  const { tag_id } = useParams();
  const hashtagData = MOCK_DATA.hashtags;
  console.log(hashtagData[tag_id].tag);
  return (
    <div className={classes.container}>
      <article className={classes.hashtag_wrapper}>
        <figure className={classes.img_block}>
          <img src={hash_img} />
          <figcaption>
            <h1>
              #저는&nbsp;
              <span>{hashtagData[tag_id].tag}</span>
              입니다.
            </h1>
            <p>{hashtagData[tag_id].text}</p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
};

export default HashTag;
