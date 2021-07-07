import React from 'react';
import Container from './Container';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.logo}>RockStore</h1>
      </Container>
    </header>
  );
}
