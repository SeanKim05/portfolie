import React, { useContext } from 'react';
import classes from './NavButton.module.scss';

const NavButton = ({ event, title }) => {
  return (
    <div>
      <button className={classes.nav_button} onClick={event}>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default NavButton;
