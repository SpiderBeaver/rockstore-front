import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../../styles/globals.css';
import { CartContextProvider } from '../context/CartContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
