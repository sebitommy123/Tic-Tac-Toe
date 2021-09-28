import React from "react";
import "../styles/PersistentScore.css";
import { colors } from "../constants";
import { Score } from "../utils";

export interface Props {
  score: Score;
}

const PersistentScore = (props: Props) => {
  return (
    <div className="persistentScore">
      <span style={{ color: colors["x"] }}>{props.score.x}</span>
      <span className="separator">-</span>
      <span style={{ color: colors["o"] }}>{props.score.o}</span>
    </div>
  );
};

export default PersistentScore;
