import React, { useState } from 'react';

const OverlayContext = React.createContext({
  clicked: false,
  navClickedHandler: () => {},
});

export const OverlayContextProvider = props => {
  const [clicked, setClicked] = useState(false);

  const navClickedHandler = value => {
    setClicked(value);
  };

  const contextValue = {
    clicked,
    navClickedHandler,
  };

  return (
    <OverlayContext.Provider value={contextValue}>
      {props.children}
    </OverlayContext.Provider>
  );
};

export default OverlayContext;
