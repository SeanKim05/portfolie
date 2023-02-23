import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MyNameDetail.module.scss';
import { useParams } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import MOCK_DATA from '../../data/mock.json';

const MyNameDetail = () => {
  const [fadeout, setFadeout] = useState(false);
  const { tag_id } = useParams();
  const personal_info_data = MOCK_DATA.personal_info;
  const navigate = useNavigate();

  const go_back = () => {
    setFadeout(true);
    setTimeout(() => {
      navigate(-1);
    }, 900);
  };

  return (
    <div className={`${classes.container} ${fadeout ? classes.fade_out : ''}`}>
      <article className={classes.hashtag_wrapper}>
        <div className={classes.back_button}>
          <BsBackspace onClick={go_back} />
        </div>
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

export default MyNameDetail;
