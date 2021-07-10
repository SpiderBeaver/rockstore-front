import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Container from './Container';
import styles from './Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const cartContext = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.logo}>
            <Link href="/">RockStore</Link>
          </h1>
          <div className={styles.cart}>
            <Link href="/cart">
              <a>
                <span>{cartContext.items.map((item) => item.count).reduce((a, b) => a + b, 0)}</span>
                <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon}></FontAwesomeIcon>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
