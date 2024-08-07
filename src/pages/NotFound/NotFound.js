import React from "react";
import classes from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={classes.not_found}>
      <h1>404: Not Found</h1>
      <p>죄송합니다, 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to={"/"}>메인페이지로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
