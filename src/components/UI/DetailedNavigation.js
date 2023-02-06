import React, { useContext, useState } from 'react';
import classes from './DetailedNavigation.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavContext from '../../context/nav-context';

const DetailedNavigation = () => {
  const overlayCtx = useContext(NavContext);
  console.log(overlayCtx.clicked);

  return (
    <>
      {overlayCtx.clicked && (
        <div
          className={classes.detailed_nav_container}
          onClick={() => overlayCtx.navClickedHandler(false)}
        >
          <FaArrowLeft />
          <li>
            <Link to="/">Hello</Link>
          </li>
          <li>
            <Link to="/main">I'm</Link>
          </li>
          <li>
            <Link to="/">Yu Hyun</Link>
          </li>
          <li>
            <Link to="/">I do</Link>
          </li>
          <li>
            <Link to="/">I dream</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
