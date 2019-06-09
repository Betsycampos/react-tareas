import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/navegacion.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navegacion />

        <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}

export default App;
