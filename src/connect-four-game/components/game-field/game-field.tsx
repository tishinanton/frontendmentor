import React, { useState } from "react";
import styles from "./game-field.module.scss";
import { Player } from "../../models";
import { Board } from "../board/board";
import { TurnLabelBackdrop } from "../turn-label-backdrop/turn-label-backdrop";
import { GameControls } from "../game-controls/game-controls";
import { Score } from "../score/score";

export interface GameFieldProps {
  currentTurn: Player;
}

export const GameField = (props: GameFieldProps) => {
  const [color, setColor] = useState<Player | undefined>();

  return (
    <div className={styles.gameField}>
      <div className={styles.controls}>
        <GameControls onMenu={() => {}} onRestart={() => {}} />
      </div>
      <div className={styles.p1Score}>
        <Score player="red" score={12} />
      </div>
      <div className={styles.p2Score}>
        <Score player="yellow" score={23} />
      </div>
      <div className={styles.board}>
        <Board
          field={[
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined],
          ]}
          onColumnClick={() => {}}
          timeleft={12}
          state="yellow-turn"
        />
      </div>
      <div
        className={styles.turnLabel}
        onClick={() => {
          if (color === undefined) {
            setColor("red");
          } else if (color === "red") {
            setColor("yellow");
          } else {
            setColor(undefined);
          }
        }}
      >
        <TurnLabelBackdrop color={color} />
      </div>
    </div>
  );
};
