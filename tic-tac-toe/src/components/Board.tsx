import "../styles/Board.css";
import Icon from "./Icon";
import { Slot } from "../utils";

export interface Props {
  onclick: (x: number, y: number) => void;
  board: Slot[][];
}

const Board = (props: Props) => {
  return (
    <div className="board">
      {props.board.map((row, y) => (
        <div key={y} className="row">
          {row.map((square, x) => (
            <div
              key={x}
              className={"square " + (square ? "tile" + square : "clickable")}
              onClick={() => props.onclick(x, y)}
            >
              <Icon slot={square} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
