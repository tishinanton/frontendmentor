import React, { useState } from "react";
import styles from "./rating-form.module.css";
import ratingStyles from "./../rating-styles.module.css";
import { useIsMobile } from "../../../breakpoints.hook";
import { CircleButton } from "../circle-button/circle-button";
import starIcon from "./../../assets/icon-star.svg";

export interface IRatingFormProps {
  onSubmit(score: number): void;
}

export const RatingForm = (props: IRatingFormProps) => {
  const [score, setScore] = useState<number | undefined>();

  const isMobile = useIsMobile();

  const formClassName = [
    ratingStyles.form,
    isMobile ? styles.mobile : styles.desktop,
    isMobile ? ratingStyles.mobile : ratingStyles.desktop,
  ].join(" ");

  return (
    <div className={formClassName}>
      <div className={styles.star}>
        <CircleButton size={isMobile ? 40 : 48}>
          <img src={starIcon} alt="decoration star icon" />
        </CircleButton>
      </div>
      <div className={ratingStyles.heading}>How did we do?</div>
      <div className={ratingStyles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className={styles.scores}>
        {[1, 2, 3, 4, 5].map((s) => (
          <CircleButton
            size={isMobile ? 42 : 51}
            isActive={score === s}
            onClick={() => setScore(s)}
            key={s}
          >
            {s}
          </CircleButton>
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => !!score && props.onSubmit(score)}
      >
        SUBMIT
      </button>
    </div>
  );
};
