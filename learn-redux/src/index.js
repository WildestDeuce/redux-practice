import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers/reducers';
import { Provider } from 'react-redux';

const myStore = createStore(allReducers);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,

  document.getElementById('root')
);


// window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()