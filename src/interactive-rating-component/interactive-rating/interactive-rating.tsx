import { useIsMobile } from "../../breakpoints.hook";
import { RatingForm } from "./rating-form/rating-form";
import styles from "./interactive-rating.module.css";
import React, { useState } from "react";
import { RatingConfirmation } from "./rating-confirmation/rating-confirmation";

export const InteractiveRating = () => {
  const isMobile = useIsMobile();
  const [score, setScore] = useState<number | undefined>();

  const ratingClass = [
    styles.rating,
    isMobile ? styles.mobile : styles.desktop,
  ].join(" ");

  return (
    <div className={ratingClass}>
      {score === undefined && (
        <RatingForm
          onSubmit={(score) => {
            setScore(score);
          }}
        />
      )}
      {score !== undefined && <RatingConfirmation score={score} />}
    </div>
  );
};
