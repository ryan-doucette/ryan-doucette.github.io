import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Header from './components/header/Header';
import Background from './components/background/Background';
import { CurrentScreenContext } from './current-screen-context';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const getUrl = () => {
    const url = location.pathname.substring(1);
    if (url.length === 0) {
      return 'home';
    }
    else {
      return url;
    }
  }

  useEffect(() => {
    var url = location.pathname.substring(1);
    if (url.length === 0) {
      url = 'home';
    }
    
    setCurrentScreen(url);
  }, [location.pathname]);

  const [currentScreen, setCurrentScreen] = useState(() => {
    return getUrl();
  })

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
