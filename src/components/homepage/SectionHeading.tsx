import React from 'react';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ children }: React.PropsWithChildren<{}>) {
  return <h2 className={styles.heading}>{children}</h2>;
}
