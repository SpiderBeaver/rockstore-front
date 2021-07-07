import React from 'react';
import { Product } from '../domain/Product';
import styles from './ProductsList.module.css';

export interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
