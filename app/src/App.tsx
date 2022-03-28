import React from 'react';
// import Home from './components/Home';
import Main from './components/Main';
import Header from './components/header/Header';
import Background from './components/screens/home/Background';

const App = () => {
  return (
    <div>
        <Header/>
        <Background/>
        <Main/>
    </div>
  );
}

export default App;
