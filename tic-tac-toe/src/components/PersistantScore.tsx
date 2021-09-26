import React from "react";

import "../styles/PersistantScore.css";

import colors from "../colors.json";
import { Score } from "../utils";

export interface Props {
  score: Score;
}

export default function PersistantScore(props: Props) {
  return (
    <div className='persistantScore'>
      <span style={{ color: colors["X"] }}>{props.score.X}</span>
      <span className='separator'>-</span>
      <span style={{ color: colors["O"] }}>{props.score.O}</span>
    </div>
  );
}
