import React from 'react';
import { Product } from '../../domain/Product';
import styles from './ProductsList.module.css';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <li key={product.id} className={styles.productsListItem}>
          <Link href={`/products/${product.id}`}>
            <a className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <Image
                  src={`http://localhost:3001/uploads/${product.pictureFilename}`}
                  alt={`Picture of ${product.name}`}
                  width={100}
                  height={100}
                  layout="responsive"
                ></Image>
              </div>
              <div className={styles.productDetails}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
