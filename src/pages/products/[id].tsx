import { GetServerSideProps } from 'next';
import React from 'react';
import { fetchProduct } from '../../api/api';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import Product from '../../components/product/Product';
import { Product as ProductModel } from '../../domain/Product';
import styles from './[id].module.css';

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

export default function ProductPage({ product }: ProductProps) {
  return (
    <div className={styles.page}>
      <Header></Header>

      <Container>
        <Product product={product}></Product>
      </Container>
    </div>
  );
}
