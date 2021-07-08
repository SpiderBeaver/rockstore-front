import React, { createContext, useState } from 'react';

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

  const contextValue: Cart = {
    items: items,
    addProduct: (id) => {
      setItems((oldItems) => {
        const item = oldItems.find((i) => i.productId === id);
        if (item) {
          const newItem: CartItem = { ...item, count: item.count + 1 };
          const newItems = [...oldItems.filter((i) => i.productId !== id), newItem];
          return newItems;
        } else {
          return [...oldItems, { productId: id, count: 1 }];
        }
      });
    },
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
