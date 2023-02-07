import { useContext, useState, useEffect } from 'react';
import classes from './Navigation.module.scss';

import NavContext from '../../../context/nav-context';
import DetailedNavigation from './DetailedNavigation';
import logo from '../../../assets/images/logo_transparent.png';
import { FaBars, FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { clicked, navClickedHandler, yScrollVal } = useContext(NavContext);

  useEffect(() => {
    if (yScrollVal > 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [yScrollVal, isVisible]);

  // console.log(visible);

  return (
    <>
      {clicked ? (
        <DetailedNavigation />
      ) : (
        <nav className={classes.nav_container}>
          <div className={classes.default_nav_wrapper}>
            <div className={classes.menu_icon}>
              <FaBars alt="menu_bar" onClick={() => navClickedHandler(true)} />
            </div>
            <img
              style={{ opacity: isVisible ? '1' : '0' }}
              src={logo}
              alt="메인로고"
            />
            <div className={classes.dev_link_icon}>
              <a
                href="https://github.com/SeanKim05"
                style={{ opacity: isVisible ? '1' : '0' }}
              >
                <FaGithub alt="github" />
              </a>
              <a
                href="https://dorian-gorgonzola-46b.notion.site/74eef0a73ad04982a0927137ac1eaeb0"
                style={{ opacity: isVisible ? '1' : '0' }}
              >
                <SiNotion alt="Notion" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navigation;
