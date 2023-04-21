import React, { memo, useEffect, useState } from "react";
import styles from "./board.module.scss";
import boardBack from "./../../assets/images/board-layer-black-large.svg";
import boardFront from "./../../assets/images/board-layer-white-large.svg";
import { Player } from "../../models";
import redIndicator from "./../../assets/images/marker-red.svg";
import yellowIndicator from "./../../assets/images/marker-yellow.svg";
import redTurnIndicator from "./../../assets/images/turn-background-red.svg";
import yellowTurnIndicator from "./../../assets/images/turn-background-yellow.svg";

export type BoardColumn = [
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined
];

export interface BoardProps {
  field: [
    BoardColumn,
    BoardColumn,
    BoardColumn,
    BoardColumn,
    BoardColumn,
    BoardColumn,
    BoardColumn
  ];
  state:
    | "red-turn"
    | "yellow-turn"
    | "turn-animation"
    | "pause"
    | "red-win"
    | "yellow-win";
  timeleft?: number;
  onColumnClick: (column: number) => void;
}

export interface ColumnIndicatorProps {
  lastDefinedColumn: number;
  shouldShow: boolean;
  indicator: string;
}

export const ColumnIndicator = memo((props: ColumnIndicatorProps) => {
  const { lastDefinedColumn, indicator, shouldShow } = props;
  return (
    <div
      className={styles.indicator}
      style={{
        left: lastDefinedColumn * 88 + 32,
        opacity: shouldShow ? 1 : 0,
      }}
    >
      <img src={indicator} alt="column indicator" />
    </div>
  );
});

export interface TurnIndicatorProps {
  timeleft: number;
  player: Player;
}

export const TurnIndicator = (props: TurnIndicatorProps) => {
  const { timeleft, player } = props;
  return (
    <div className={styles.turnIndicator} data-player={player}>
      <img
        src={player === "red" ? redTurnIndicator : yellowTurnIndicator}
        alt="turn indicator"
      />
      <span className={styles.player}>{player}'s turn</span>
      <span className={styles.timeleft}>{timeleft}s</span>
    </div>
  );
};

export const Board = (props: BoardProps) => {
  const { field, state, onColumnClick, timeleft } = props;
  const [activeColumn, setActiveColumn] = useState<number | undefined>();
  const [lastDefinedColumn, setLastDefinedColumn] = useState(0);

  useEffect(() => {
    if (activeColumn !== undefined) {
      setLastDefinedColumn(activeColumn);
    }
  }, [activeColumn]);

  const pellets = field.map((col, index) => (
    <div
      key={index}
      className={[
        styles.pelletsCol,
        activeColumn === index ? styles.activeColumn : "",
      ].join(" ")}
      onMouseEnter={() => setActiveColumn(index)}
      onMouseLeave={() => setActiveColumn(undefined)}
      onClick={() => onColumnClick(index)}
    ></div>
  ));

  return (
    <div className={styles.board}>
      <div className={styles.back}>
        <img src={boardBack} alt="back" />
      </div>
      <div className={styles.pellets}>{pellets}</div>
      <div className={styles.front}>
        <img src={boardFront} alt="front" />
      </div>
      <ColumnIndicator
        indicator={state === "red-turn" ? redIndicator : yellowIndicator}
        lastDefinedColumn={lastDefinedColumn}
        shouldShow={
          activeColumn !== undefined &&
          (state === "red-turn" || state === "yellow-turn")
        }
      />
      {(state === "red-turn" || state === "yellow-turn") && (
        <TurnIndicator
          player={state === "red-turn" ? "red" : "yellow"}
          timeleft={timeleft !== undefined && timeleft >= 0 ? timeleft : 0}
        />
      )}
    </div>
  );
};
