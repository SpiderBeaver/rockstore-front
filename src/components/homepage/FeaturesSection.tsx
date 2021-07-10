import { faDollarSign, faExpandAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  return (
    <div className={styles.featuresSection}>
      <h2>Features</h2>
      <ul className={styles.featuresList}>
        <li className={styles.feature}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faExpandAlt} className={styles.icon}></FontAwesomeIcon>
          </div>
          <span className={styles.featureText}>Every size from small to huge</span>
        </li>
        <li className={styles.feature}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faDollarSign} className={styles.icon}></FontAwesomeIcon>
          </div>
          <span className={styles.featureText}>So cheap we want to buy them ourselves</span>
        </li>
        <li className={styles.feature}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faSmile} className={styles.icon}></FontAwesomeIcon>
          </div>
          <span className={styles.featureText}>Scientists proved that rocks make you 65% happier</span>
        </li>
      </ul>
    </div>
  );
}
