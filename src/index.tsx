import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

import App from './App';

// render router
ReactDOM.render(
  <App />
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
