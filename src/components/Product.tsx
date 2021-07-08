import React, { useContext } from 'react';
import styles from './Product.module.css';
import Image from 'next/image';
import { Product as ProductModel } from '../domain/Product';
import { CartContext } from '../context/CartContext';

export interface ProductProps {
  product: ProductModel;
}
export default function Product({ product }: ProductProps) {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    cartContext.addProduct(product.id);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <span>${product.price.toFixed(2)}</span>
        <p>{product.description}</p>
        <button className={styles.actionButton} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`http://localhost:3001/uploads/${product.pictureFilename}`}
          alt={`Picture of ${product.name}`}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    </div>
  );
}
