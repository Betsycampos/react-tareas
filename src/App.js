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
       <div className="col-md-4">
         <div className="card mt-4">
       <div className="card-header">
       <h1>{tarea.titulo}</h1>
       <span className="badge badge-pill badge-danger ml-2">
       {tarea.prioridad}
       </span>
       </div>
       <div className="card-body">
       <p>{tarea.descripcion}</p>
       <p><mark>{tarea.responsable}</mark></p>
       

       </div>
       </div>
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
       <div className="container">
         <div className="row mt-4">
          {tareas}
         </div>
       </div>
       
       

        <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}

export default App;
