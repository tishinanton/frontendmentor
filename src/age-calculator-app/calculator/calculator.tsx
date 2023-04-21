import { useCallback } from "react";
import { Input } from "../input/input";
import styles from "./calculator.module.scss";

const daysMap = new Map<number, number>([
  [1, 31],
  [2, 28],
  [3, 31],
  [4, 30],
  [5, 31],
  [6, 30],
  [7, 31],
  [8, 31],
  [9, 30],
  [10, 31],
  [11, 30],
  [12, 31],
]);

const useDayValidator = (month?: number, year?: number) => {
  return useCallback(
    (day?: number) => {
      if (day === undefined) {
        return "This field is required";
      }
      if (month === undefined && (day > 31 || day < 1)) {
        return "Must be a valid day";
      }
      if (year === undefined) {
      }
    },
    [month, year]
  );
};

export const Calculator = () => {
  return (
    <div className={styles.calc}>
      <div className={styles.controls}>
        <Input maxLength={2} label="Day" errorMessage="Must be a valid day" />
        <Input
          maxLength={2}
          label="Month"
          errorMessage="Must be a valid month"
        />
        <Input maxLength={4} label="Year" errorMessage="Must be in the past" />
      </div>
    </div>
  );
};
