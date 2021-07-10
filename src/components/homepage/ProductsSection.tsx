import React from 'react';
import { Product } from '../../domain/Product';
import ProductsList from '../product/ProductsList';
import SectionHeading from './SectionHeading';

export interface ProductsSectionProps {
  products: Product[];
}
export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <div>
      <SectionHeading>Ready to shop?</SectionHeading>
      <ProductsList products={products}></ProductsList>
    </div>
  );
}
