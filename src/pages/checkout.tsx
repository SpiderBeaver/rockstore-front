import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState } from 'react';
import { createOrder, CreateOrderParams } from '../api/api';
import Container from '../components/Container';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { CartContext } from '../context/CartContext';
import styles from './checkout.module.css';

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (name !== '' && phoneNumber !== '' && email !== '' && address !== '') {
      const params: CreateOrderParams = {
        order: {
          products: cartContext.items.map((item) => ({ id: item.productId, count: item.count })),
          client: {
            name: name,
            address: address,
            email: email,
            phoneNumber: phoneNumber,
          },
        },
      };
      await createOrder(params);
      localStorage.removeItem('cart');
      router.push('/');
    }
  };

  return (
    <div>
      <Header></Header>
      <Container>
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            className={styles.textField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextInput>
          <TextInput
            label="Address"
            className={styles.textField}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></TextInput>
          <TextInput
            label="Phone Number"
            className={styles.textField}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextInput>
          <TextInput
            label="Email"
            className={styles.textField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextInput>

          <input type="submit" value="Checkout"></input>
        </form>
      </Container>
    </div>
  );
}
