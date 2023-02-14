import classes from './NavButton.module.scss';

const NavButton = ({ event, title }) => {
  return (
    <button className={classes.nav_button} onClick={event}>
      <span>{title}</span>
    </button>
  );
};

export default NavButton;
