import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './data/reducers/initialState'

const store = createStore(rootReducer)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

export default store;
