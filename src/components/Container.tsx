import React from 'react';
import styles from './Container.module.css';

export default function Container({ children }: React.PropsWithChildren<{}>) {
  return <div className={styles.container}>{children}</div>;
}
