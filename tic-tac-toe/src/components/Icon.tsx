import { Slot } from "../utils";
import { colors } from "../constants";

export interface Props {
  slot: Slot;
}

const svgO = (
  <svg
    width="116"
    height="116"
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="58" cy="58" r="43" stroke={colors["o"]} stroke-width="30" />
  </svg>
);

const svgX = (
  <svg
    width="119"
    height="119"
    viewBox="0 0 119 119"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.58092 3.58092C8.35548 -1.19364 16.0966 -1.19364 20.8711 3.58092L115.419 98.1289C120.194 102.903 120.194 110.645 115.419 115.419C110.645 120.194 102.903 120.194 98.1289 115.419L3.58092 20.8711C-1.19364 16.0966 -1.19364 8.35548 3.58092 3.58092Z"
      fill={colors["x"]}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M115.419 3.58092C120.194 8.35548 120.194 16.0966 115.419 20.8711L20.8711 115.419C16.0966 120.194 8.35549 120.194 3.58094 115.419C-1.19363 110.645 -1.19363 102.903 3.58094 98.1289L98.1289 3.58092C102.903 -1.19364 110.645 -1.19364 115.419 3.58092Z"
      fill={colors["x"]}
    />
  </svg>
);

const svgNull = <svg></svg>;

const Icon = (props: Props) => {
  if (!props.slot) return svgNull;
  return props.slot === "o" ? svgO : svgX;
};

export default Icon;
