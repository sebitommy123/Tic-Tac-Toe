import React, { useState } from "react";
import Board from "./Board";

import colors from '../colors.json';

import './Game.css';

export default function Game() {
  const [board, setBoard] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [turn, setTurn]: ['X'|'O', any] = useState("X");

  const boardClickEvent = (x: number, y: number) => {
    const newBoard = [...board];
    if (newBoard[y][x] === null) {
      newBoard[y][x] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="game">
      <h1 className="playerTurnText" style={{color: colors[turn]}}>Player {turn === 'X' ? 1 : 2} ({turn})</h1>
      <Board onclick={boardClickEvent} board={board} />
    </div>
  );
}
