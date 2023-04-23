import { useCallback, useEffect, useState } from "react";
import { Input } from "../input/input";
import styles from "./calculator.module.scss";
import logo from "./../assets/images/icon-arrow.svg";

const getTotalDays = (day: number, month: number, year: number) => {
  const date = new Date(year, month - 1, day);
  const today = new Date();
  const diff = Math.abs(date.getTime() - today.getTime());
  return Math.ceil(diff / (1000 * 3600 * 24));
};

const getYears = (days: number) => {
  return Math.floor(days / 365);
};

const getMonths = (days: number) => {
  return Math.floor((days % 365) / 30);
};

const getDays = (days: number) => {
  return Math.floor((days % 365) % 30);
};

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
      if (
        year === undefined &&
        month !== undefined &&
        (!daysMap.has(month) || day > daysMap.get(month)!)
      ) {
        return "Must be a valid day";
      }
      if (year !== undefined && month !== undefined) {
        if (day > daysMap.get(month)! || day < 1) {
          if (!(year % 4 === 0 && month === 2 && day == 29)) {
            return "Must be a valid date";
          }
        }
        // check if date is in the past
        const date = new Date(year, month - 1, day);
        if (date > new Date()) {
          return "Must be in the past";
        }
      }
    },
    [month, year]
  );
};

const useMonthValidator = () => {
  return useCallback((month?: number) => {
    if (month === undefined) {
      return "This field is required";
    }
    if (month > 12 || month < 1) {
      return "Must be a valid month";
    }
  }, []);
};

const useYearValidator = () => {
  return useCallback((year?: number) => {
    if (year === undefined) {
      return "This field is required";
    }
    if (year > new Date().getFullYear() || year < 1900) {
      return "Must be in the past";
    }
  }, []);
};

export const Calculator = () => {
  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  const [calculated, setCalculated] = useState<{
    day: "--" | number;
    month: "--" | number;
    year: "--" | number;
  }>({ day: "--", month: "--", year: "--" });

  var dayValidator = useDayValidator(month, year);
  var monthValidator = useMonthValidator();
  var yearValidator = useYearValidator();

  useEffect(() => {
    if (day !== undefined && month !== undefined && year !== undefined) {
      const days = getTotalDays(day, month, year);
      setCalculated({
        day: getDays(days),
        month: getMonths(days),
        year: getYears(days),
      });
    } else {
      setCalculated({ day: "--", month: "--", year: "--" });
    }
  }, [day, month, year]);

  return (
    <div className={styles.calc}>
      <div className={styles.controls}>
        <Input
          value={day}
          maxLength={2}
          label="Day"
          validator={dayValidator}
          onChange={setDay}
        />
        <Input
          value={month}
          maxLength={2}
          label="Month"
          validator={monthValidator}
          onChange={setMonth}
        />
        <Input
          value={year}
          maxLength={4}
          label="Year"
          validator={yearValidator}
          onChange={setYear}
        />
      </div>
      <div className={styles.divider}>
        <div className={styles.image}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.calculations}>
        <div className={styles.item}>
          <span className={styles.result}>{calculated.year}</span> years
        </div>
        <div className={styles.item}>
          <span className={styles.result}>{calculated.month}</span> months
        </div>
        <div className={styles.item}>
          <span className={styles.result}>{calculated.day}</span> days
        </div>
      </div>
    </div>
  );
};
