import classes from './FirstSlide.module.scss';
import Video from '../../assets/videos/Mountain.mp4';
import NavButton from '../../components/NavButton';

const FirstSlide = props => {
  return (
    <div className={classes.main_container}>
      <div className={classes.caption_wrapper}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <video loop autoPlay muted>
        <source src={Video} alt="coffee_bean" type="video/mp4" />
      </video>
    </div>
  );
};

export default FirstSlide;
