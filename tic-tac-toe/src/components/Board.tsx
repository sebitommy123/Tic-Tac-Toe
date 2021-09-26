import "../styles/Board.css";

import { Slot, getSVG } from "../utils";

export interface Props {
  onclick: (x: number, y: number) => void;
  board: Slot[][];
}

export default function Board(props: Props) {
  return (
    <div className='board'>
      {props.board.map((row, y) => (
        <div key={y} className='row'>
          {row.map((square, x) => (
            <div
              key={x}
              className={"square " + (square ? "tile" + square : "clickable")}
              onClick={() => props.onclick(x, y)}
            >
              {square ? getSVG(square) : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
