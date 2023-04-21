import React from "react";
import styles from "./turn-label-backdrop.module.scss";
import { Player } from "../../models";

export interface TurnLabelBackdropProps {
  color?: Player;
}

export const TurnLabelBackdrop = (props: TurnLabelBackdropProps) => {
  return (
    <div className={styles.turnLabelBackdrop}>
      <div data-color={props.color} className={styles.backdrop}></div>
    </div>
  );
};
