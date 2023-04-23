import React, { useEffect, useState } from "react";
import styles from "./input.module.scss";

export type InputProps = {
  label?: string;
  value?: number;
  maxLength?: number;
  onChange?: (value?: number) => void;
  errorMessage?: string;
  validator?: (value?: number) => string | undefined;
};

let InputId = 0;

export const Input = (props: InputProps) => {
  const { label, value, onChange, maxLength, validator } = props;

  const [inputId, setInputId] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<number | string | undefined>(
    value ?? ""
  );
  const [error, setError] = useState<string | undefined>();
  const [dirty, setDirty] = useState<boolean>(false);

  useEffect(() => {
    setInputId(`input-${InputId++}`);
  }, []);

  const onChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (!dirty) {
      setDirty(true);
    }
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
  };

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  useEffect(() => {
    const updatedValue =
      inputValue === ""
        ? undefined
        : inputValue === undefined
        ? inputValue
        : +inputValue;
    if (validator !== undefined && dirty) {
      setError(validator(updatedValue));
    }
    onChange && onChange(updatedValue);
  }, [inputValue, onChange, dirty, validator]);

  return (
    <div
      className={[styles.inputWrapper, error != null && styles.hasError].join(
        " "
      )}
    >
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
        onBlur={() => {
          console.log("focused");
          setDirty(true);
        }}
      />
      {!!error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
