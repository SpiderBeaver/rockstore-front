import type { AppProps } from 'next/app';
import React from 'react';
import '../../styles/globals.css';
import { CartContextProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
export default MyApp;
