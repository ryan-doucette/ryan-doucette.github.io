import React, {useEffect, useState, useCallback} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './screens/home/Home';
import About from './screens/about/About';
import Skills from './screens/skills/Skills';
import Experience from './screens/experience/Experience';
import Contact from './screens/contact/Contact';

import './_main.scss';

const Main = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const location = useLocation();

  const adjustScreenHeight = () => {
    if (window.innerWidth < 769) {
      setWindowHeight(window.innerHeight - 65);
    }
    else if (window.innerWidth < 1899) {
      setWindowHeight(window.innerHeight - 80);
    }
    else {
      setWindowHeight(window.innerHeight - 90);
    }
  };

  // Run on initial load
  useEffect(() => {
    adjustScreenHeight();
  }, []);

  // Run when screen size is changed
  const handleWindowResize = useCallback(event => {
    adjustScreenHeight();
  }, []); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

    return (
      <div className={location.pathname.substring(1) === 'skills' ? 'screen' : 'screen minHeightController'} style={{height: windowHeight}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    )
};

export default Main;
