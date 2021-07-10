import React from 'react';
import Container from './Container';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <span>2021 RockStore - Made by SpiderBeaver</span>
      </Container>
    </footer>
  );
}
