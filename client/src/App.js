import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  authenticate(email, password) {
    axios.post('http://localhost:3000/user_token',
              { auth: { email: email, password: password } }
    ).then(res => {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwt;
      axios.get('http://localhost:3000/secret')
           .then(res => this.setState({ username: res.data.username }));
    });
  }

  componentDidMount() {
    this.authenticate("bob@gmail.com", "hello");
  }

  render() {
    return (
      <div className="App">
        <p>{ this.state.username || "authenticating..." }</p>
      </div>
    );
  }
}

export default App;
