import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";

import {Button} from "@material-ui/core"
import MiComponente from './MiComponente';
import MiValidador from './MiValidador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img 
      src="https://i.pinimg.com/originals/32/82/36/328236d1e2cecebea49a5a0ceda62d95.jpg"
      widht="400"
      height="400"
      />
        <p>Clave U de Valpo</p>
        <MiValidador  valor = "123456789" />
      </header>
    </div>
  );
}



export default App;
