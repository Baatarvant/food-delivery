"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { CartItem, Food } from "@/lib/types/common";
import { addItem, removeItem, updateQuantity as updateItemQuantity } from "./cart-reducer";
import { getInitialCart, saveCart } from "./cart-storage";

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (foodId: number) => void;
  updateQuantity: (foodId: number, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);

  const addToCart = useCallback((food: Food) => {
    setCartItems((prev) => addItem(prev, food));
  }, []);

  const removeFromCart = useCallback((foodId: number) => {
    setCartItems((prev) => removeItem(prev, foodId));
  }, []);

  const updateQuantity = useCallback((foodId: number, quantity: number) => {
    setCartItems((prev) => updateItemQuantity(prev, foodId, quantity));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0,
      ),
    [cartItems],
  );

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
