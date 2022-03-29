import React from "react";

export const CurrentScreenContext = React.createContext({
    currentScreen: 'Home',
    toggleCurrentScreen: (screenCategory: string) => {},
  });