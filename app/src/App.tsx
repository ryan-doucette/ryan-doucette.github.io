import React, { useState } from 'react';
import Main from './components/Main';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { CurrentScreenContext } from './current-screen-context';

const App = () => {
  
  const getUrl = () => {
    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if (url.length === 0) {
      return 'home';
    }
    else {
      return url;
    }
  }

  const [currentScreen, setCurrentScreen] = useState(getUrl());
  const toggleCurrentScreen = (currentScreen: string) => { 
    setCurrentScreen(currentScreen);
  }

  return (
    <CurrentScreenContext.Provider value={{currentScreen, toggleCurrentScreen}}>
      <Header/>
      <Background/>
      <Main/>
    </CurrentScreenContext.Provider>
  );
}

export default App;
