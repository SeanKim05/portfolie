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
            <Link to="/"> &lt; Hello / &gt;</Link>
          </li>
          <li>
            <Link to="/main">&lt; I'm / &gt;</Link>
          </li>
          <li>
            <Link to="/myName">&lt; Yu Hyun / &gt;</Link>
          </li>
          <li>
            <Link to="/Ido">&lt; I do / &gt;</Link>
          </li>
          <li>
            <Link to="/IDream">&lt; I dream / &gt;</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
