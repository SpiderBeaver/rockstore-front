import Head from 'next/head';
import React from 'react';
import styles from './index.module.css';
import { GetServerSideProps } from 'next';
import { fetchProducts } from '../api/api';
import { Product } from '../domain/Product';
import ProductsList from '../components/product/ProductsList';
import Header from '../components/layout/Header';
import Container from '../components/layout/Container';
import HeroSection from '../components/homepage/HeroSection';
import IntroductionSection from '../components/homepage/IntroductionSection';
import FeaturesSection from '../components/homepage/FeaturesSection';
import Footer from '../components/layout/Footer';
import ProductsSection from '../components/homepage/ProductsSection';

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
        <ProductsSection products={products}></ProductsSection>
      </Container>

      <Footer></Footer>
    </div>
  );
}
