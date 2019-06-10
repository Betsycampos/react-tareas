import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './tareas.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
  }
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-dark">
         <a href="" className="text-white">
           Tareas
         </a>
       </nav>
       

        <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}

export default App;
