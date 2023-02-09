import React from 'react';
import classes from './HashTag.module.scss';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../../data/mock.json';

const HashTag = () => {
  const { tag_id } = useParams();
  const personal_info_data = MOCK_DATA.personal_info;
  console.log(personal_info_data[tag_id].tag);
  return (
    <div className={classes.container}>
      <article className={classes.hashtag_wrapper}>
        <figure className={classes.img_block}>
          <img
            src={require(`../../assets/images/${personal_info_data[tag_id].img_name}`)}
            alt="iam"
          />
          <figcaption>
            <h1>
              #저는&nbsp;
              <span>{personal_info_data[tag_id].title}</span>
              입니다.
            </h1>
            <p>{personal_info_data[tag_id].text}</p>
          </figcaption>
        </figure>
      </article>
    </div>
  );
};

export default HashTag;
