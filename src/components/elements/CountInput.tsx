import React from 'react';
import styles from './CountInput.module.css';

export interface CountInputProps {
  value: number;
  onChange?: (value: number) => void;
}

export default function CountInput({ value, onChange }: CountInputProps) {
  const handleMinus = () => {
    onChange?.(value - 1);
  };

  const handlePlus = () => {
    onChange?.(value + 1);
  };

  return (
    <div className={styles.container}>
      <span className={styles.minus} onClick={handleMinus}>
        -
      </span>
      <span className={styles.value}>{value}</span>
      <span className={styles.plus} onClick={handlePlus}>
        +
      </span>
    </div>
  );
}
