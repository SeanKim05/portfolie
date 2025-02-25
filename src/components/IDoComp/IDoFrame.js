import { useContext, useEffect } from "react";
import classes from "./IDoFrame.module.scss";
import NavContext from "../../context/nav-context";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

const IDoFrame = ({ project_data }) => {
  const { scrollHandler } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    document.getElementById("test_slideY").addEventListener("scroll", (e) => {
      scrollHandler(e.currentTarget.scrollTop);
    });
  }, []);

  return (
    <div className={classes.ido_container}>
      {project_data.map((data) => (
        <section
          key={data.id}
          className={classes.ido_slide}
          style={{
            backgroundImage: `URL(${require(`../../assets/images/${data.img_name}`)})`,
          }}
        >
          <div className={classes.ido_card_wrapper}>
            <h1>&nbsp;{data.title}</h1>
            <li>
              <span>&nbsp;요약:</span> {data.summary}
            </li>
            <li>
              <span>&nbsp;기간:</span> {data.duration}
            </li>
            <li>
              <span>&nbsp;인원:</span> {data.personnel}
            </li>
            <li>
              &nbsp;담당파트:
              <ul>
                {data.assigned.map((work, i) => (
                  <li key={i}>&nbsp;{work}</li>
                ))}
              </ul>
            </li>
          </div>
        </section>
      ))}
    </div>
  );
};

export default IDoFrame;
