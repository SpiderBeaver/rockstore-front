import React from 'react';
import Container from './Container';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Container>
        <span className={styles.slogan}>These stones will rock your world</span>
        <a className={styles.actionButton} href="#">
          Start shopping
        </a>
      </Container>
    </div>
  );
}
