import React, { useContext, useEffect, useState } from 'react';
import classes from './MyName.module.scss';
import NavContext from '../../context/nav-context';
import data from '../../data/mock.json';
import MOCK_DATA from '../../data/mock.json';
import { useNavigate } from 'react-router-dom';

const personal_info_data = MOCK_DATA.personal_info;

const MyName = () => {
  const { scrollHandler, yScrollVal } = useContext(NavContext);
  const [fadeout, setFadeout] = useState(false);
  const navigate = useNavigate();
  // const go_detail = paramsid => {
  //   navigate(`/myname_detail/${paramsid}`);
  // };

  const go_detail = paramsid => {
    setFadeout(true);
    setTimeout(() => {
      navigate(`/myname_detail/${paramsid}`);
    }, 2000);
  };

  useEffect(() => {
    scrollHandler(1);
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 20) {
        scrollHandler(1000);
      } else {
        scrollHandler(1);
      }
    });
  }, []);

  return (
    <section
      id="my_name_Y"
      className={`${classes.my_name_container} ${
        fadeout ? classes.fade_out : ''
      }`}
    >
      <div className={classes.frame}>
        {personal_info_data.map(img => (
          <div
            className={classes.img_wrapper}
            onClick={() => {
              setFadeout(true);
              go_detail(img.id);
            }}
          >
            <img src={require(`../../assets/images/${img.img_name}`)}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyName;
