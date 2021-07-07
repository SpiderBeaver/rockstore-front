import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RockStore</title>
        <meta name="description" content="RockStore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <h1>Rockstore</h1>
    </div>
  );
}
