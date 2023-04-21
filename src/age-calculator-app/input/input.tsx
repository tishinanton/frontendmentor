import React, { useEffect, useState } from "react";
import styles from "./input.module.scss";

export type InputProps = {
  label?: string;
  value?: number;
  maxLength?: number;
  onChange?: (value?: number) => void;
  errorMessage?: string;
};

let InputId = 0;

export const Input = (props: InputProps) => {
  const { label, value, onChange, maxLength, errorMessage } = props;

  const [inputId, setInputId] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<number | string | undefined>(
    value ?? ""
  );

  useEffect(() => {
    setInputId(`input-${InputId++}`);
  }, []);

  function onChangeHandler({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void {
    if (!!maxLength && value.length > maxLength) {
      return;
    }
    if (value === "") {
      setInputValue("");
      return;
    }
    if (Number.isNaN(+value)) {
      return;
    }
    setInputValue(value);
  }

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  useEffect(() => {
    onChange &&
      onChange(
        inputValue === ""
          ? undefined
          : inputValue === undefined
          ? inputValue
          : +inputValue
      );
  }, [inputValue, onChange]);

  return (
    <div className={styles.inputWrapper}>
      {!!label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
      />
      {!!errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};
