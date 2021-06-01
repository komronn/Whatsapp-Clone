import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import reducer, { initialState } from './components/reducer';
import { StateProvider } from './components/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider 
      initialState={initialState}
      reducer={reducer}
    >
      <App />
    </StateProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);