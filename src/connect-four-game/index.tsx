import React from "react";
import styles from "./styles.module.scss";
import { GameField } from "./components/game-field/game-field";

export const ConnectFourGameWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <GameField currentTurn="red"></GameField>
    </div>
  );
};

export default ConnectFourGameWrapper;
