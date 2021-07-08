import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { fetchProduct } from '../../api/api';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { Product as ProductModel } from '../../domain/Product';
import styles from './[id].module.css';
import Image from 'next/image';

interface ProductProps {
  product: ProductModel;
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
  const productId = parseInt(context.query.id![0]);
  const product = await fetchProduct(productId);
  return {
    props: {
      product: product,
    },
  };
};

export default function Product({ product }: ProductProps) {
  return (
    <div className={styles.page}>
      <Header></Header>

      <Container>
        <div className={styles.product}>
          <div className={styles.productInfo}>
            <h1>{product.name}</h1>
            <span>${product.price.toFixed(2)}</span>
            <p>{product.description}</p>
            <button className={styles.actionButton}>Add to cart</button>
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
      </Container>
    </div>
  );
}
