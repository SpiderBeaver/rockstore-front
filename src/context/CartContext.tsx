import React, { createContext, useEffect, useState } from 'react';

interface CartItem {
  productId: number;
  count: number;
}

interface Cart {
  items: CartItem[];
  addProduct: (id: number) => void;
}

export const CartContext = createContext<Cart>({ items: [], addProduct: (id) => {} });

export function CartContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const localStoredItemsString = localStorage.getItem('cart');
    if (localStoredItemsString) {
      const localStoredItems = JSON.parse(localStoredItemsString);
      setItems(localStoredItems);
    }
  }, []);

  const contextValue: Cart = {
    items: items,
    addProduct: (id) => {
      setItems((oldItems) => {
        const item = oldItems.find((i) => i.productId === id);
        if (item) {
          const newItem: CartItem = { ...item, count: item.count + 1 };
          const newItems = [...oldItems.filter((i) => i.productId !== id), newItem];
          localStorage.setItem('cart', JSON.stringify(newItems));
          return newItems;
        } else {
          const newItems = [...oldItems, { productId: id, count: 1 }];
          localStorage.setItem('cart', JSON.stringify(newItems));
          return newItems;
        }
      });
    },
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
