import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { fetchProducts } from '../api/api';
import FeaturesSection from '../components/homepage/FeaturesSection';
import HeroSection from '../components/homepage/HeroSection';
import IntroductionSection from '../components/homepage/IntroductionSection';
import ProductsSection from '../components/homepage/ProductsSection';
import Container from '../components/layout/Container';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Page from '../components/layout/Page';
import { Product } from '../domain/Product';

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
    <Page>
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
    </Page>
  );
}
