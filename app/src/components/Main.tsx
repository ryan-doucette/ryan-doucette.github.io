import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import About from './screens/about/About';
import Skills from './screens/skills/Skills';
import Experience from './screens/experience/Experience';
import Contact from './screens/contact/Contact';

const Main = () => (
    // <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    // </main>
);

export default Main;
