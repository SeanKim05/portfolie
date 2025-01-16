import React, { useEffect, useRef, useContext } from "react";
import FirstSlide from "../../components/IntroComp/FirstSlide";
import SecondSlide from "../../components/IntroComp/SecondSlide";
import ThirdSlide from "../../components/IntroComp/ThirdSlide";
import ScrollButton from "../../components/UI/Buttons/ScrollButton";
import NavContext from "../../context/nav-context";
import SLIDE_MOCK_DATA from "../../data/mock.json";
import classes from "./Intro.module.scss";

const slide_data = SLIDE_MOCK_DATA.slide_data;

function Intro() {
  const { scrollHandler } = useContext(NavContext);
  const containerRef = useRef(null); // DOM 접근을 위한 useRef
  const throttleTimeout = useRef(null); // 스로틀링 타이머

  useEffect(() => {
    scrollHandler(1); // 초기화
  }, []);

  // 스로틀링 적용된 스크롤 핸들러
  const onScroll = (e) => {
    if (!throttleTimeout.current) {
      throttleTimeout.current = setTimeout(() => {
        const scrollTop = e.target.scrollTop;
        scrollHandler(scrollTop || 1);
        // 타이머 초기화
        throttleTimeout.current = null;
      }, 400);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

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
