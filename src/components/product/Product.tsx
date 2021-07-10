import React, { useContext } from 'react';
import styles from './Product.module.css';
import Image from 'next/image';
import { Product as ProductModel } from '../../domain/Product';
import { CartContext } from '../../context/CartContext';
import ActionButton from '../elements/ActionButton';
import CountInput from '../elements/CountInput';

export interface ProductProps {
  product: ProductModel;
}
export default function Product({ product }: ProductProps) {
  const cartContext = useContext(CartContext);
  const cartItem = cartContext.items.find((item) => item.productId === product.id);

  const handleCountChange = (newCount: number) => {
    cartContext.setCount(product.id, newCount);
  };

  const handleAddToCart = () => {
    cartContext.addProduct(product.id);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <span>${product.price.toFixed(2)}</span>
        <p>{product.description}</p>
        {cartItem !== undefined ? (
          <CountInput value={cartItem.count} onChange={handleCountChange}></CountInput>
        ) : (
          <ActionButton onClick={handleAddToCart}>Add to cart</ActionButton>
        )}
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
