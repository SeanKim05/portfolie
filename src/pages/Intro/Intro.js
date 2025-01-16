import React, { useEffect, useRef, useContext } from "react";
import FirstSlide from "../../components/IntroComp/FirstSlide";
import SecondSlide from "../../components/IntroComp/SecondSlide";
import ThirdSlide from "../../components/IntroComp/ThirdSlide";
import ScrollButton from "../../components/UI/Buttons/ScrollButton";
import NavContext from "../../context/nav-context";
import SLIDE_MOCK_DATA from "../../data/mock.json";
import classes from "./Intro.module.scss";

// 1. Make a reusable rAF helper.
function rAFScroll(callback) {
  let ticking = false;

  return function handler() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      ticking = false;
      callback();
    });
  };
}

const slide_data = SLIDE_MOCK_DATA.slide_data;

function Intro() {
  const { scrollHandler } = useContext(NavContext);
  const containerRef = useRef(null);

  useEffect(() => {
    // 초기화 (맨 처음 마운트 시 값 세팅)
    scrollHandler(1);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const onScroll = rAFScroll(() => {
      const scrollTop = container.scrollTop || 1;
      scrollHandler(scrollTop);
    });
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [scrollHandler]);

  return (
    <div className={classes.main_container} ref={containerRef} id="main_slideY">
      <section className={classes.slide_main_scroll_section}>
        <FirstSlide title={slide_data[0].title} text={slide_data[0].text} />
        <ScrollButton />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <SecondSlide title={slide_data[1].title} text={slide_data[1].text} />
        <ScrollButton />
      </section>
      <section className={classes.slide_main_scroll_section}>
        <ThirdSlide title={slide_data[2].title} text={slide_data[2].text} />
      </section>
    </div>
  );
}

export default Intro;
