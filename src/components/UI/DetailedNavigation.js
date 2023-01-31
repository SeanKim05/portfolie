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
            <Link to="/">메인페이지</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>

          <li>
            <Link to="/">문의하기</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default DetailedNavigation;
