import React, { useState } from 'react';

const NavContext = React.createContext({
  clicked: false,
  navClickedHandler: () => {},
});

export const NavContextProvider = props => {
  const [clicked, setClicked] = useState(false);
  const [yScrollVal, setYScrollVal] = useState(1);

  const navClickedHandler = value => {
    setClicked(value);
  };

  const scrollHandler = value => {
    setYScrollVal(value);
  };

  const contextValue = {
    clicked,
    navClickedHandler,
    yScrollVal,
    scrollHandler,
  };

  console.log(yScrollVal);

  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
