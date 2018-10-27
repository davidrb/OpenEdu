import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';
import axios from 'axios';
import './App.css'

let rootReducer = (state, action) => {
  switch(action.type) {
    case "LOGOUT":
      return { ...state, username: null };
    case "CHANGE_USER":
      return { ...state, username: action.user };
    case "ERROR":
      return { ...state, error: action.what };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return {};
  }
}

function login(email, password) {
  return dispatch => {
    return axios.post(
      'http://localhost:3000/user_token',
      { auth: { email, password } }
    )
    .then(res => {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwt;
      axios.get('http://localhost:3000/secret')
           .then(res => dispatch({ type: "CHANGE_USER", user: res.data.username }));
      },
      err => {
        dispatch({type: "LOGOUT"});
        dispatch(timedError("login failed", 2000))
      });
  };
}

function timedError(what, time) {
  return dispatch => {
    dispatch({ type: "ERROR", what });

    return new Promise(resolve => setTimeout(resolve, time))
          .then(() => dispatch({ type: "CLEAR_ERROR" }));
  };
}

let OpenEdu = (props) => {
  let emailfield;
  let passwordfield;

  return (
    <div className="App">
      <p>{props.username ? "hello, " + props.username : "not logged in"}</p>
      <form action="#">
        <input ref={node => (emailfield = node)} />
        <input ref={node => (passwordfield = node)} />
        <button onClick={() => props.login(emailfield.value, passwordfield.value)}>Log In</button>
        <button onClick={() => props.logout()}>Logout</button>
      </form>
      { props.error ? <p>{props.error}</p> : null }
    </div>
  );
}

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    const Main = connect(
      state => ({ ...state, username: state.username }),
      dispatch => ({
        login: (email, password) => dispatch(login(email, password)),
        logout: () => dispatch({ type: "LOGOUT" })
      })
    )(OpenEdu);

    return (<Provider store={store}><Main /></Provider>);
  }
}

export default App;
