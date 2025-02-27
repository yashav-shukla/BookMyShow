import React from 'react';
import './App.css';
import BsState from './Context/BsState';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>
    </div>
  )
}

export default App;
