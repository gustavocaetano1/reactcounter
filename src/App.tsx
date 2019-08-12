import React from 'react';
import logo from './logo.svg';
import './App.css';

import Contador from './exerc/Contador';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       

      <Contador defaultNumberContador={0}/>


      </header>
    </div>
  );
}

export default App;
