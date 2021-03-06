import axios from 'axios';
import { Product } from '../domain/Product';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL!;

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(`${apiBaseUrl}/products`);
  return response.data;
}

export async function fetchProduct(id: number): Promise<Product> {
  const response = await axios.get<Product>(`${apiBaseUrl}/products/${id}`);
  return response.data;
}

export interface CreateOrderParams {
  order: {
    products: {
      id: number;
      count: number;
    }[];
    client: {
      name: string;
      email: string;
      phoneNumber: string;
      address: string;
    };
  };
}
export async function createOrder(params: CreateOrderParams) {
  await axios.post(`${apiBaseUrl}/orders`, params.order);
}
