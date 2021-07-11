import { GetServerSideProps } from 'next';
import React from 'react';
import { fetchProduct } from '../../api/api';
import Container from '../../components/layout/Container';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Page from '../../components/layout/Page';
import Product from '../../components/product/Product';
import { Product as ProductModel } from '../../domain/Product';

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
    <Page>
      <Header></Header>

      <Container>
        <Product product={product}></Product>
      </Container>

      <Footer></Footer>
    </Page>
  );
}
