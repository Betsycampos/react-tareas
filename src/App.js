import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { tareas } from './tareas.json';
import { tsAnyKeyword } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
  }
  render() {
   const tareas = this.state.tareas.map((tarea, i) => {
     return (
       <div className="card">
       {tarea.titulo}
       </div>
     )
    })


    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-dark">
         <a href="" className="text-white">
           Tareas
         </a>
       </nav>
       {tareas}
       

        <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}

export default App;
