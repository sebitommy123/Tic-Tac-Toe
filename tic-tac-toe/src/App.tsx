import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersistantScore from "./components/PersistantScore";
import Game from "./components/Game";
import { Score, Symbol, Winner } from "./utils";
import EndScreen from "./components/EndScreen";

function App() {
  let [score, setScore]: [Score, any] = useState({ X: 0, O: 0 });
  let [winner, setWinner]: [Winner, any] = useState(null);

  function onGameOver(winner: Winner) {
    setWinner(winner);
  }

  return (
    <div>
      <PersistantScore score={score} />
      {winner ? <EndScreen winner={winner} playAgain={() => {setWinner(null)}} resetScore={() => {}}/> : <Game onGameOver={onGameOver}/>}
    </div>
  );
}

export default App;
