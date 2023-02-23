import React from 'react';
import classes from './Carousel.module.scss';
import PROJECT_MOCK_DATA from '../../../data/mock.json';

console.log(PROJECT_MOCK_DATA.project);

const Carousel = () => {
  const project_data = PROJECT_MOCK_DATA.project;

  return (
    <section className={classes.carousel_container}>
      <div className={classes.slider}>
        <div className={classes.slide_track}>
          {project_data.map(data => (
            <div className={classes.slide} key={data.id}>
              <div className={classes.slide_img_wrapper}>
                <img
                  className={classes.slide_img}
                  src={require(`../../../assets/images/${
                    project_data[data.id].img_name
                  }`)}
                  alt={data.title}
                />
                <p className={classes.slide_img_text}>
                  <span>@&nbsp;{data.title}</span>
                </p>
              </div>
            </div>
          ))}
          {/* double */}
          {project_data.map(data => (
            <div className={classes.slide} key={data.id}>
              <div className={classes.slide_img_wrapper}>
                <img
                  className={classes.slide_img}
                  src={require(`../../../assets/images/${
                    project_data[data.id].img_name
                  }`)}
                  alt={data.title}
                />
                <p className={classes.slide_img_text}>
                  <span>@&nbsp;{data.title}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
