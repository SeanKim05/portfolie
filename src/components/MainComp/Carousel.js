import React from 'react';
import classes from './Carousel.module.scss';

const MockImg = [
  {
    id: 0,
    url: require('../../assets/images/project_sajo.png'),
    title: '사조의 공방',
  },
  {
    id: 1,
    url: require('../../assets/images/project_roecy.png'),
    title: 'Roecy',
  },
  {
    id: 2,
    url: require('../../assets/images/project_haii.png'),
    title: 'HAII',
  },
  {
    id: 3,
    url: require('../../assets/images/project_bodit.png'),
    title: 'Bodit',
  },
  {
    id: 4,
    url: require('../../assets/images/project_winningi.png'),
    title: 'Winning-I',
  },
  {
    id: 5,
    url: require('../../assets/images/project_roecy.png'),
    title: '로이시',
  },
];

const Carousel = () => {
  return (
    <section className={classes.carousel_container}>
      <div className={classes.slider}>
        <div className={classes.slide_track}>
          {MockImg.map(img => (
            <div className={classes.slide} key={img.id}>
              <div className={classes.slide_img_wrapper}>
                <img
                  className={classes.slide_img}
                  src={img.url}
                  alt={img.title}
                />
                <p className={classes.slide_img_text}>
                  <span href={img.link}>@&nbsp;{img.title}</span>
                </p>
              </div>
            </div>
          ))}
          {/* double */}
          {MockImg.map(img => (
            <div className={classes.slide} key={img.id}>
              <div className={classes.slide_img_wrapper}>
                <img
                  className={classes.slide_img}
                  src={img.url}
                  alt={img.title}
                />
                <p className={classes.slide_img_text}>
                  <span href={img.link}>@{img.title}</span>
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
