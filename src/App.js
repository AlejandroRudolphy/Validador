import React from 'react';
import './App.css';
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
        <MiValidador  RUT = "123456789" />
      </header>
    </div>
  );
}



export default App;
