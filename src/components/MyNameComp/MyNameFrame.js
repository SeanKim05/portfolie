import React, { useState } from 'react';
import classes from './MyNameFrame.module.scss';
import { useNavigate } from 'react-router-dom';

const MyNameFrame = ({ personal_info_data }) => {
  const [fadeout, setFadeout] = useState(false);
  const navigate = useNavigate();

  const go_detail = paramsid => {
    setFadeout(true);
    setTimeout(() => {
      navigate(`/myname_detail/${paramsid}`);
    }, 900);
  };

  return (
    <section className={`${fadeout ? classes.fade_out : ''}`}>
      <section className={classes.frame}>
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
      </section>
    </section>
  );
};

export default MyNameFrame;
