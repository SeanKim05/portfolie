import React, { useContext, useEffect, useState } from "react";
import classes from "./MyName.module.scss";
import NavContext from "../../context/nav-context";
import MOCK_DATA from "../../data/mock.json";
import { useNavigate } from "react-router-dom";
import MyNameFrame from "../../components/MyNameComp/MyNameFrame";

const personal_info_data = MOCK_DATA.personal_info;

const MyName = () => {
  const { scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 20) {
        scrollHandler(1000);
      } else {
        scrollHandler(1);
      }
    });
  }, []);

  return (
    <section id="my_name_Y" className={classes.my_name_container}>
      <MyNameFrame personal_info_data={personal_info_data} />
    </section>
  );
};

export default MyName;
