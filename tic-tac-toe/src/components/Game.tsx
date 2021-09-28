import React, { useState } from "react";
import Board from "./Board";
import { colors } from "../constants";
import "../styles/Game.css";
import { Board as BoardType, Symbol, Winner } from "../utils";

export interface Props {
  onGameOver: (winner: Winner) => void;
}

const isBoardFull = (board: BoardType): Winner | null => {
  // Check whether the board is completely occupied with X's and O's
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // If some slot isn't occupied, return null (game continues)
      if (!board[i][j]) {
        return null;
      }
    }
  }
  return "DRAW";
};

const checkForWinner = (board: BoardType): Winner | null => {
  // Check to find a row or column of three of the same symbol
  for (let i = 0; i < 3; i++) {
    // Check rows for identical symbols
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
    // Check columns for identical symbols
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  // Check diagonal starting from top-left corner
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  // Check diagonal starting from top-right corner
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return board[2][0];
  }
  // Draw is full board with no winner
  return isBoardFull(board);
};

const Game = (props: Props) => {
  const [board, setBoard] = useState<BoardType>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [turn, setTurn] = useState<Symbol>("x");

  const handleBoardClick = (x: number, y: number) => {
    const newBoard = [...board];
    if (newBoard[y][x] === null) {
      newBoard[y][x] = turn;
      setBoard(newBoard);
      setTurn(turn === "x" ? "o" : "x");
    }
    const winner = checkForWinner(newBoard);
    if (winner) {
      props.onGameOver(winner);
    }
  };

  return (
    <div className="game">
      <h1 className="playerTurnText" style={{ color: colors[turn] }}>
        Player {turn === "x" ? 1 : 2}
      </h1>
      <Board onclick={handleBoardClick} board={board} />
    </div>
  );
};

export default Game;
