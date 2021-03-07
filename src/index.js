import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StockfishDriver from './StockfishDriver';
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<StockfishDriver />, document.getElementById('root'));

{
  /* <App /> */
}

registerServiceWorker();
