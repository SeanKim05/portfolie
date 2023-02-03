import React from 'react';
import classes from './Carousel.module.scss';

const MockImg = [
  { id: 0, url: require('../../assets/images/project_sajo.png') },
  { id: 1, url: require('../../assets/images/project_roecy.png') },
  { id: 2, url: require('../../assets/images/project_haii.png') },
  { id: 3, url: require('../../assets/images/project_bodit.png') },
  { id: 4, url: require('../../assets/images/project_winningi.png') },
  { id: 5, url: require('../../assets/images/project_roecy.png') },
];

const Carousel = () => {
  return (
    <section>
      <div className={classes.slider}>
        <div className={classes.slide_track}>
          {MockImg.map(img => (
            <div className={classes.slide}>
              <img src={img.url} />
              <p>{img.id}</p>
            </div>
          ))}
          {/* double */}
          {MockImg.map(img => (
            <div className={classes.slide}>
              <img src={img.url} />
              <p>{img.id}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
