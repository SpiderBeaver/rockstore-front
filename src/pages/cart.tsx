import Link from 'next/link';
import React, { useContext } from 'react';
import { useQueries } from 'react-query';
import { fetchProduct } from '../api/api';
import CartItemsTable from '../components/CartItemsTable';
import Container from '../components/Container';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext';
import { Product } from '../domain/Product';

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
    <div>
      <Header></Header>
      <Container>
        <h1>My Cart</h1>
        {productsWithCounts && <CartItemsTable items={productsWithCounts}></CartItemsTable>}
        <div>{totalPrice && <span>Total: ${totalPrice.toFixed(2)}</span>}</div>
        <Link href="/checkout">
          <a>Proceed to Checkout</a>
        </Link>
      </Container>
    </div>
  );
}
