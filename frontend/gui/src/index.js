import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducer, composeEnhances(
  //store
  applyMiddleware(thunk)
));

const app = (
  //bring provider to wrap application and specify store we are using
  //store that contain reducer
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
