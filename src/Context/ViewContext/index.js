import React, { createContext, useState } from "react";

export const ViewerContext = createContext();

const ViewerProvider = ({ children }) => {
  const [viewer, setViewer] = useState(null);
  const [element, setElement] = useState(null);

  const value = {
    viewer,
    setViewer,
    element,
    setElement,
  };
  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  );
};

export default ViewerProvider;
