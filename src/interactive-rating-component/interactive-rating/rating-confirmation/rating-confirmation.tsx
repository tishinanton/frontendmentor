import { useIsMobile } from "../../../breakpoints.hook";
import styles from "./rating-confirmation.module.css";
import image from "./../../assets/illustration-thank-you.svg";
import ratingStyles from "./../rating-styles.module.css";

export interface IRatingConfirmationProps {
  score: number;
}

export const RatingConfirmation = (props: IRatingConfirmationProps) => {
  const isMobile = useIsMobile();

  const formClassName = [
    ratingStyles.form,
    isMobile ? styles.mobile : styles.desktop,
    isMobile ? ratingStyles.mobile : ratingStyles.desktop,
  ].join(" ");
  return (
    <div className={formClassName}>
      <div className={styles.image}>
        <img src={image} alt="rating" />
      </div>
      <div className={styles.score}>You selected {props.score} out of 5</div>
      <div className={ratingStyles.heading + " " + styles.description}>
        Thank you!
      </div>
      <div className={ratingStyles.description + " " + styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
};
