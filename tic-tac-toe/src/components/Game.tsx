import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [board, setBoard] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [turn, setTurn] = useState("X");

  const boardClickEvent = (x: number, y: number) => {
    const newBoard = [...board];
    if (newBoard[y][x] === null) {
      newBoard[y][x] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div>
      <h1>Player turn: {turn}</h1>
      <Board onclick={boardClickEvent} board={board} />
    </div>
  );
}
