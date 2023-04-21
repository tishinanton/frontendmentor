import React from "react";
import styles from "./game-controls.module.scss";
import logo from "./../../assets/images/logo.svg";
import { SimpleButton } from "../buttons/simple-button/simple-button";

export interface GameControlsProps {
  onMenu: () => void;
  onRestart: () => void;
}

export const GameControls = (props: GameControlsProps) => {
  return (
    <div className={styles.controls}>
      <div className={styles.buttonWrapper}>
        <SimpleButton onClick={props.onMenu}>Menu</SimpleButton>
      </div>
      <img src={logo} alt="" />
      <div className={styles.buttonWrapper}>
        <SimpleButton onClick={props.onRestart}>restart</SimpleButton>
      </div>
    </div>
  );
};
