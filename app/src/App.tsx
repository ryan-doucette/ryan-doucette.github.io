import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import { useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Background from './components/screens/home/Background';
import { CurrentScreenContext } from './current-screen-context';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const toggleCurrentScreen = (currentScreen: string) => { 
    setCurrentScreen(currentScreen);
  }

  const currentPath = useLocation().pathname;
  const currentTab: string = currentPath === '/' ? 'home' : currentPath.slice(1);

  useEffect(() => {
    console.log('CURRENT SCREEN : ' + currentScreen);
    console.log('CURRENT TAB : ' + currentTab);
  });

  return (
    <CurrentScreenContext.Provider value={{currentScreen, toggleCurrentScreen}}>
      <Header/>
      <Background/>
      <Main/>
    </CurrentScreenContext.Provider>
  );
}

export default App;
