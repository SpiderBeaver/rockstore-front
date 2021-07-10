import React from 'react';
import { Product } from '../../domain/Product';
import styles from './CartItemsTable.module.css';

interface CartItem {
  product: Product;
  count: number;
}

export interface CartItemsTableProps {
  items: CartItem[];
}

export default function CartItemsTable({ items }: CartItemsTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headerCell}>Product</th>
          <th className={styles.headerCell}>Price</th>
          <th className={styles.headerCell}>Quantity</th>
          <th className={styles.headerCell}>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {items
          .sort((a, b) => (a.product.name > b.product.name ? 1 : -1))
          .map((item) => (
            <tr key={item.product.id} className={styles.row}>
              <td className={styles.cell}>{item.product.name}</td>
              <td className={styles.cell}>${item.product.price.toFixed(2)}</td>
              <td className={styles.cell}>{item.count}</td>
              <td className={styles.cell}>${(item.count * item.product.price).toFixed(2)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
