import './App.css'

import rootReducer from './reducers.js';
import OpenEduContainer from './containers/OpenEduContainer.js';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

let App = (props) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <OpenEduContainer />
    </Provider>
  )
};

export default App;
