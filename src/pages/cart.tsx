import Link from 'next/link';
import React, { useContext } from 'react';
import { useQueries } from 'react-query';
import { fetchProduct } from '../api/api';
import CartItemsTable from '../components/cart/CartItemsTable';
import ActionButton from '../components/elements/ActionButton';
import Container from '../components/layout/Container';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Page from '../components/layout/Page';
import { CartContext } from '../context/CartContext';
import { Product } from '../domain/Product';
import styles from './cart.module.css';

export default function CartPage() {
  const cartContext = useContext(CartContext);

  const productQueries = useQueries(
    cartContext.items.map((cartItem) => ({
      queryKey: ['product', cartItem.productId],
      queryFn: () => fetchProduct(cartItem.productId),
    }))
  );
  const products = productQueries.every((q) => q.status === 'success')
    ? productQueries.map((q) => q.data as Product)
    : null;

  const productsWithCounts =
    products !== null
      ? cartContext.items.map((cartItem) => ({
          product: products.find((p) => p.id === cartItem.productId)!,
          count: cartItem.count,
        }))
      : null;

  const totalPrice = productsWithCounts
    ?.map((product) => product.product.price * product.count)
    .reduce((a, b) => a + b, 0);

  return (
    <Page>
      <Header></Header>
      <Container>
        <h1 className={styles.heading}>My Cart</h1>
        <div className={styles.itemsTableContainer}>
          {productsWithCounts && <CartItemsTable items={productsWithCounts}></CartItemsTable>}
        </div>
        <div className={styles.total}>{totalPrice && <span>Total: ${totalPrice.toFixed(2)}</span>}</div>
        <Link href="/checkout">
          <a className={styles.checkoutButton}>
            <ActionButton>Proceed to Checkout</ActionButton>
          </a>
        </Link>
      </Container>
      <Footer></Footer>
    </Page>
  );
}
