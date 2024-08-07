import React, { useContext, useEffect } from "react";
import classes from "./Main.module.scss";
import NavContext from "../../context/nav-context";
import ImChangeComp from "../../components/MainComp/ImChangeComp";
import Work from "../../components/MainComp/WorkComp/Work";
import MOCK_DATA from "../../data/mock.json";
import ScrollButton from "../../components/UI/Buttons/ScrollButton";

const personal_info_data = MOCK_DATA.personal_info;

const Main = () => {
  const { scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
  }, []);

  const onScroll = (e) => {
    let screenY = e.currentTarget.scrollTop;
    if (screenY < 1) {
      scrollHandler(1);
    } else {
      scrollHandler(screenY);
    }
  };

  useEffect(() => {
    document.getElementById("main_Y").addEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="main_Y" className={classes.main_container}>
      <section className={classes.main_scroll_section}>
        <ImChangeComp personal_info_data={personal_info_data} />
        <ScrollButton />
      </section>
      <section className={classes.main_scroll_section}>
        <Work />
      </section>
    </div>
  );
};

export default Main;
