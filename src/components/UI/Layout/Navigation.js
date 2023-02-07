import { useContext } from 'react';
import classes from './Navigation.module.scss';

import NavContext from '../../../context/nav-context';
import DetailedNavigation from './DetailedNavigation';
import logo from '../../../assets/images/logo_transparent.png';
import { FaBars, FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

function Navigation() {
  const { clicked, navClickedHandler, yScrollVal } = useContext(NavContext);

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
              style={{ opacity: 1 / yScrollVal }}
              src={logo}
              alt="메인로고"
            />
            <div className={classes.dev_link_icon}>
              <a
                href="https://github.com/SeanKim05"
                style={{ opacity: 1 / yScrollVal }}
              >
                <FaGithub alt="github" />
              </a>
              <a
                href="https://dorian-gorgonzola-46b.notion.site/74eef0a73ad04982a0927137ac1eaeb0"
                style={{ opacity: 1 / yScrollVal }}
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
