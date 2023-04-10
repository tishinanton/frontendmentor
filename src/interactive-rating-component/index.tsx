import React from "react";
import styles from "./styles.module.css";
import { InteractiveRating } from "./interactive-rating/interactive-rating";

export const InteractiveRatingComponent = () => {
  return (
    <div className={styles.wrapper}>
      <InteractiveRating />
    </div>
  );
};

export default InteractiveRatingComponent;
