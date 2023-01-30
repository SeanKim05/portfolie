import React from 'react';
import classes from './NavButton.module.scss';

const NavButton = props => {
  return (
    <div>
      <button className={`${classes.nav_button}`} onClick={props.event}>
        <span>{props.title} </span>
      </button>
    </div>
  );
};

export default NavButton;
