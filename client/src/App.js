import { login, LOGOUT } from './actions.js';
import rootReducer from './reducers.js';
import OpenEdu from './components/OpenEdu.js';

import './App.css'

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';

const Main = connect(
  state => ({ ...state, username: state.username }),
  dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch({ type: LOGOUT })
  })
)(OpenEdu);

let App = (props) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
};

export default App;
