import React, { useContext, useEffect } from 'react';
import classes from './IDo.module.scss';
import NavContext from '../../context/nav-context';
import IDoFrame from '../../components/IDoComp/IDoFrame';

const IDo = () => {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.scrollHandler(1000);
  });

  return (
    <div id="test_slideY">
      <IDoFrame />
    </div>
  );
};

export default IDo;
