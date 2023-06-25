import React, { useContext } from "react";
import style from "./index.module.scss";
import PlayersInfoContext from "../../context";

export default function ScoreInfoBox() {
  const { playersInfo } = useContext(PlayersInfoContext);
  const { x, o } = playersInfo;

  return (
    <div className={style.scoreBox}>
      <h2 className={style.text}>Score</h2>
      <p className={style.text}>{x.name + ": " + x.score}</p>
      <p className={style.text}>{o.name + ": " + o.score}</p>
    </div>
  );
}
