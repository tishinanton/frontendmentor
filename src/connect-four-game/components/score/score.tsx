import React from "react";
import styles from "./score.module.scss";
import { Player } from "../../models";
import redPlayerFace from "./../../assets/images/player-one.svg";
import yellowPlayerFace from "./../../assets/images/player-two.svg";

export interface ScoreProps {
  player: Player;
  score: number;
}

export const Score = (props: ScoreProps) => {
  const face = props.player === "red" ? redPlayerFace : yellowPlayerFace;
  return (
    <div className={styles.scoreCard} data-player={props.player}>
      <img src={face} alt="" />
      <div className={styles.score}>
        <span>{props.score}</span>
        {props.player}
      </div>
    </div>
  );
};
