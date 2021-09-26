import './Board.css';

export interface Props {
  onclick: (x: number, y: number) => void,
  board: number[][];
}

export default function Board(props: Props) {
  return (<div className="board">
    {props.board.map((row, y) => <div key={y} className="row">
      {row.map((square, x) => <div key={x} className="square" onClick={() => props.onclick(x, y)}>{square ? square : ""}</div>)}
    </div>)}
  </div>);
}
