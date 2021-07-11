import React from 'react';
import styles from './ActionButton.module.css';

type ActionButtonVariant = 'default' | 'big';

type ActionButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ActionButtonVariant;
};

export default function ActionButton({ variant = 'default', ...props }: ActionButtonProps) {
  const className = `${styles.button} ${variant === 'big' ? styles.buttonBig : ''} ${props.className}`;
  console.log(className);
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
