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
    }, 2000);
  };
  console.log(fadeout);

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
            <Link to="/">Hello</Link>
          </li>
          <li>
            <Link to="/main">I'm</Link>
          </li>
          <li>
            <Link to="/myName">Yu Hyun</Link>
          </li>
          <li>
            <Link to="/Ido">I do</Link>
          </li>
          <li>
            <Link to="/IDream">I dream</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
