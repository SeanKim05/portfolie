import classes from './FirstSlide.module.scss';
import Video from '../../assets/videos/Mountain.mp4';

const FirstSlide = props => {
  return (
    <section className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <div className={classes.combined_text}>
          <h2>{props.text[0]}</h2>
          <h1 className={`${classes.bolder_text} ${classes.spoiler}`}>
            {props.title}
          </h1>
        </div>
        <p>{props.text[1]}</p>
      </div>
      <video loop autoPlay muted>
        <source src={Video} alt="coffee_bean" type="video/mp4" />
      </video>
    </section>
  );
};

export default FirstSlide;
