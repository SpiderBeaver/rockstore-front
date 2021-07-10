import React, { useEffect, useRef, useState } from 'react';
import styles from './TextInput.module.css';

export interface TextInputProps {
  label: string;
  className?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // In case props.value is set to non-empty string before the input is focused.
  useEffect(() => {
    if (!isActivated && props.value !== '') {
      setIsActivated(true);
    }
  }, [props.value, isActivated]);

  const handleClick = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (!isActivated) {
      setIsActivated(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (isActivated && props.value === '') {
      setIsActivated(false);
    }
  };

  return (
    <div
      className={
        styles.container +
        ' ' +
        (isActivated ? styles.containerActivated : '') +
        ' ' +
        (isFocused ? styles.containerFocused : '') +
        ' ' +
        props.className
      }
      onClick={handleClick}
    >
      <label className={styles.label}>{props.label}</label>
      <input
        type="text"
        value={props.value}
        className={styles.textInput}
        ref={inputRef}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}
