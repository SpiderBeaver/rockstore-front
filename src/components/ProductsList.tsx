import React from 'react';
import { Product } from '../domain/Product';
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
          <div className={styles.productImageContainer}>
            <Image
              src={`http://localhost:3001/uploads/${product.pictureFilename}`}
              alt={`Picture of ${product.name}`}
              width={100}
              height={100}
              layout="responsive"
            ></Image>
          </div>
          <Link href={`/products/${product.id}`}>
            <a className={styles.productName}>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
