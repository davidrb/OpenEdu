import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.post('http://localhost:3000/test', { message: "Goodbye, cruel world" })
         .then(res => this.setState({ message: res.data }));
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
      </div>
    );
  }
}

export default App;
