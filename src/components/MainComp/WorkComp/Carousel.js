import React from "react";
import classes from "./Carousel.module.scss";

const Carousel = ({ project_data }) => {
  return (
    <section className={classes.carousel_container}>
      <div className={classes.slide_track}>
        {/* 원본 슬라이드 목록 */}
        {project_data.map((data) => (
          <div className={classes.slide} key={data.id}>
            <div className={classes.slide_img_wrapper}>
              <img
                className={classes.slide_img}
                src={require(`../../../assets/images/${data.img_name}`)}
                alt={data.title}
              />
              <p className={classes.slide_img_text}>
                <span>@ {data.title}</span>
              </p>
            </div>
          </div>
        ))}

        {/* 동일 슬라이드 목록 반복 */}
        {project_data.map((data) => (
          <div className={classes.slide} key={`duplicate-${data.id}`}>
            <div className={classes.slide_img_wrapper}>
              <img
                className={classes.slide_img}
                src={require(`../../../assets/images/${data.img_name}`)}
                alt={data.title}
              />
              <p className={classes.slide_img_text}>
                <span>@ {data.title}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
