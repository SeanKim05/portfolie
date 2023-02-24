import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './MyNameDetail.module.scss';
import NavContext from '../../context/nav-context';
import MOCK_DATA from '../../data/mock.json';
import { BsBackspace } from 'react-icons/bs';

const HashTag = () => {
  const [fadeout, setFadeout] = useState(false);
  const { tag_id } = useParams();
  const { scrollHandler } = useContext(NavContext);
  const personal_info_data = MOCK_DATA.personal_info;
  const navigate = useNavigate();

  const go_back = () => {
    setFadeout(true);
    setTimeout(() => {
      navigate(-1);
    }, 900);
  };

  useEffect(() => {
    scrollHandler(1);
  }, []);

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

export default HashTag;
