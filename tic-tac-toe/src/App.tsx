import React, { useState } from "react";
import { Score, Winner } from "./utils";
import usePersistentObjectData from "./hooks/usePersistentData";
import EndScreen from "./components/EndScreen";
import PersistentScore from "./components/PersistentScore";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  const [score, setScore] = usePersistentObjectData<Score>(
    { x: 0, o: 0 },
    "score"
  );
  const [winner, setWinner] = useState<Winner | null>(null);

  const onGameOver = (winner: Winner) => {
    if (winner !== "DRAW") {
      const newScore = { ...score } as Score;
      newScore[winner]++;
      setScore(newScore);
    }
    setWinner(winner);
  };

  const resetScore = () => {
    setScore({ x: 0, o: 0 });
  };

  return (
    <>
      <PersistentScore score={score} />
      {winner ? (
        <EndScreen
          winner={winner}
          playAgain={() => {
            setWinner(null);
          }}
          resetScore={resetScore}
        />
      ) : (
        <Game onGameOver={onGameOver} />
      )}
    </>
  );
};

export default App;
