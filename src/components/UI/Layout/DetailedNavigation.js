import React, { useContext, useState } from 'react';
import classes from './DetailedNavigation.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavContext from '../../../context/nav-context';

const DetailedNavigation = () => {
  const [fadeout, setFadeout] = useState(false);
  const { clicked, navClickedHandler } = useContext(NavContext);
  const nav_revert = () => {
    setFadeout(true);
    setTimeout(() => {
      navClickedHandler(false);
    }, 1000);
  };

  return (
    <>
      {clicked && (
        <div
          className={`${classes.detailed_nav_container} ${
            fadeout ? classes.fade_out : ''
          }`}
          onClick={nav_revert}
        >
          <FaArrowLeft />
          <li>
            <Link to="/"> Intro</Link>
          </li>
          <li>
            <Link to="/main"> Main</Link>
          </li>
          <li>
            <Link to="/myName"> About Me</Link>
          </li>
          <li>
            <Link to="/Ido"> Portfolio</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
