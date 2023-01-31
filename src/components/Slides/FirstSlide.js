import classes from './FirstSlide.module.scss';
import Video from '../../assets/videos/Mountain.mp4';
import NavButton from '../../components/NavButton';

const FirstSlide = props => {
  return (
    <section className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <h1 className={classes.bolder_text}>{props.title}</h1>
        <h1>{props.text[0]}</h1>
        <p>{props.text[1]}</p>
      </div>
      <video loop autoPlay muted>
        <source src={Video} alt="coffee_bean" type="video/mp4" />
      </video>
    </section>
  );
};

export default FirstSlide;
