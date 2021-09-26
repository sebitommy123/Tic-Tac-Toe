import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersistantScore from './components/PersistantScore';
import Game from './components/Game';

function App() {
  let playing = true;
  return (
    <div>
      <PersistantScore />
      {playing ? <Game/> : <h1>Not Playing</h1>}
    </div>
  );
}

export default App;
