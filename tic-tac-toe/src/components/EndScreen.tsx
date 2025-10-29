import "../styles/EndScreen.css";
import { Winner } from "../utils";
import { colors } from "../constants";
import caelin from "../images/Caelin.png";

export interface Props {
  winner: Winner;
  resetScore: () => void;
  playAgain: () => void;
}

const EndScreen = (props: Props) => {
  let text;
  if (props.winner !== "DRAW") {
    text = <span>Player {props.winner === "x" ? 1 : 2} won!</span>;
  } else {
    text = (
      <div id="endScreenFlex">
        <div>It's a draw!</div>
        <img
          id="caelinPic"
          src={caelin}
          alt="Caelin clowning you on the time you have lost playing tictactoe that you can never, ever get back, and despite that, you have drawn."
        ></img>
      </div>
    );
  }

  return (
    <main className="endScreen">
      <h1 className="playerWinnerText" style={{ color: colors[props.winner] }}>
        {text}
      </h1>
      <button onClick={props.playAgain} className="playAgain">
        <p>Play Again!</p>
      </button>
      <button onClick={props.resetScore} className="resetScore">
        Reset Score
      </button>
    </main>
  );
};

export default EndScreen;
