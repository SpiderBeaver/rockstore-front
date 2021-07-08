import Head from 'next/head';
import React from 'react';
import styles from './index.module.css';
import { GetServerSideProps } from 'next';
import { fetchProducts } from '../api/api';
import { Product } from '../domain/Product';
import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
import Container from '../components/Container';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

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

export default function HomePage({ products }: HomeProps) {
  return (
    <div className={styles.page}>
      <Head>
        <title>RockStore</title>
        <meta name="description" content="RockStore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <HeroSection></HeroSection>
      <Container>
        <IntroductionSection></IntroductionSection>
        <FeaturesSection></FeaturesSection>
        <h2>Ready to shop?</h2>
        <ProductsList products={products}></ProductsList>
      </Container>

      <Footer></Footer>
    </div>
  );
}
