import React from "react";

export const CurrentScreenContext = React.createContext({
    currentScreen: '/',
    toggleCurrentScreen: (screenCategory: string) => {},
  });