import Head from 'next/head';
import React from 'react';
import styles from './index.module.css';
import { GetServerSideProps } from 'next';
import { fetchProducts } from '../api/fetchProducts';
import { Product } from '../domain/Product';
import ProductsList from '../components/ProductsList';

interface HomeProps {
  products: Product[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const products = await fetchProducts();
  return {
    props: {
      products: products,
    },
  };
};

export default function Home({ products }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RockStore</title>
        <meta name="description" content="RockStore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Rockstore</h1>
      <ProductsList products={products}></ProductsList>
    </div>
  );
}
