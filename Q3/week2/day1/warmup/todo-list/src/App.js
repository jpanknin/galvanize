import React, { Component } from 'react';
import Input from "./Input";
import List from "./List";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    )
  }
}

export default App;
