import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
