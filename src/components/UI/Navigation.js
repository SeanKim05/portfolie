import { useState, useEffect, useContext } from 'react';
import { FaBars, FaMapMarkedAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo_transparent.png';
import OverlayContext from '../../context/overlay-context';
import DetailedNavigation from './DetailedNavigation';

import classes from './Navigation.module.scss';

function Navigation() {
  const [height, setHeight] = useState(1);

  const overlayCtx = useContext(OverlayContext);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll === 0) {
      setHeight(1);
    }
  };

  // const clickHander = () => {
  //   setShowMenu(true);
  // };

  console.log(overlayCtx.clicked);

  return (
    <>
      {overlayCtx.clicked ? (
        <>
          <DetailedNavigation />
        </>
      ) : (
        <nav className={classes.nav_container}>
          <div className={classes.default_nav_wrapper}>
            <FaBars
              alt="menu_bar"
              onClick={() => overlayCtx.navClickedHandler(true)}
            />
            <img style={{ opacity: 1 / height }} src={logo} alt="메인로고" />
            <FaMapMarkedAlt alt="map_icon" />
          </div>
        </nav>
      )}
    </>
  );
}

export default Navigation;
