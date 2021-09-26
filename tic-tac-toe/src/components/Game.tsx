import React, { useState } from "react";
import Board from "./Board";
import colors from "../colors.json";
import "../styles/Game.css";
import { Symbol, Slot, Winner } from "../utils";

export interface Props {
  onGameOver: (winner: Winner) => void;
}

export default function Game(props: Props) {
  const [board, setBoard]: [Slot[][], any] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [turn, setTurn]: [Symbol, any] = useState("X");

  const boardClickEvent = (x: number, y: number) => {
    const newBoard = [...board];
    if (newBoard[y][x] === null) {
      newBoard[y][x] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    } else { //TESTING END SCREEN FOR NOW
      props.onGameOver(newBoard[y][x] ? newBoard[y][x] : 'DRAW');
    }
  };

  return (
    <div className='game'>
      <h1 className='playerTurnText' style={{ color: colors[turn] }}>
        Player {turn === "X" ? 1 : 2}
      </h1>
      <Board onclick={boardClickEvent} board={board} />
    </div>
  );
}
