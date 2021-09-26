import "../styles/EndScreen.css";

import { Symbol } from "../utils";

import colors from '../colors.json';

export interface Props {
  winner: Symbol;
  resetScore: () => void;
  playAgain: () => void;
}

export default function EndScreen(props: Props) {
  return (
    <div className="endScreen">
      <h1 className='playerWinnerText' style={{color: colors[props.winner]}}>Player {props.winner === 'X' ? 1 : 2} Won!</h1>
      <button onClick={props.playAgain} className='playAgain'><p>Play Again!</p></button>
      <a onClick={props.resetScore} className='resetScore'>Reset Score</a>
    </div>
  );
}
