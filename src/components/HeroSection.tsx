import React from 'react';
import ActionButton from './ActionButton';
import Container from './Container';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Container>
        <span className={styles.slogan}>These stones will rock your world</span>
        <a href="#">
          <ActionButton variant="big">Start shopping</ActionButton>
        </a>
      </Container>
    </div>
  );
}
