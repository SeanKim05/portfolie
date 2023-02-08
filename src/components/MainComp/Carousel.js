import React from 'react';
import classes from './Carousel.module.scss';

const MockImg = [
  {
    id: 0,
    url: require('../../assets/images/project_sajo.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/2-e4a85349b5674e4bac3e947e958d0520',
    title: '사조의 공방',
  },
  {
    id: 1,
    url: require('../../assets/images/project_roecy.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/1-Roecy-29b07ad7a7bd46959bb963902a903029',
    title: '로이시',
  },
  {
    id: 2,
    url: require('../../assets/images/project_haii.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/HAII-e438d69a4c124abea867958b61217985',
    title: '하이',
  },
  {
    id: 3,
    url: require('../../assets/images/project_bodit.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/Bodit-998f3e6ebae94aec8115dd220edcf82b',
    title: '바딧',
  },
  {
    id: 4,
    url: require('../../assets/images/project_winningi.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/WINNING-I-aa57b4b77d0a472bb6ed1acb68aa905e',
    title: '위닝아이',
  },
  {
    id: 5,
    url: require('../../assets/images/project_roecy.png'),
    link: 'https://dorian-gorgonzola-46b.notion.site/2-e4a85349b5674e4bac3e947e958d0520',
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
                <p className={classes.slide_img_detail}>
                  <a href={img.link}>상세보기</a>
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
                <p className={classes.slide_img_detail}>
                  <a href={img.link}>상세보기</a>
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
