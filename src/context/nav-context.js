import React, { useEffect, useState } from 'react';

const NavContext = React.createContext({
  clicked: false,
  navClickedHandler: () => {},
  scrollHandler: () => {},
  yScrollVal: 1,
});
export const NavContextProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [yScrollVal, setYScrollVal] = useState(1);

  const navClickedHandler = value => {
    setClicked(value);
  };

  const scrollHandler = value => {
    setYScrollVal(value);
  };

  useEffect(() => {});

  const contextValue = {
    clicked,
    navClickedHandler,
    yScrollVal,
    scrollHandler,
  };

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
};

export default NavContext;
