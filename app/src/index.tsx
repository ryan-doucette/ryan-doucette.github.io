import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import Main from './Main';
import Header from '../src/components/Header';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header/>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
