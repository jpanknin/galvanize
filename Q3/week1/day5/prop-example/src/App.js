import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Turkey from './Turkey';
import People from './People';
import Person from './Person';

const PeopleData = [
  { id: 1, name: 'Sam'},
  { id: 2, name: 'Banu'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Stephanie" lname="Baron" />
        <Turkey food="Pad Thai" utensil="Shovel" celebrity="Kenny Rogers" />
        <People people={ PeopleData } />
      </div>
    );
  }
}

export default App;
