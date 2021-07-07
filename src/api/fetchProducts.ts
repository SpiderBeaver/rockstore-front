import axios from 'axios';
import { Product } from '../domain/Product';

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>('http://localhost:3001/products');
  return response.data;
}
