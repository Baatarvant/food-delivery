"use client";

import { Food } from "@/lib/types/common";
import { createContext, ReactNode, useContext, useState } from "react";

type CardContextType = {
  card: FoodCard[];
  addCard: (food: Food, quantity: number) => void;
};

export const CardContext = createContext({} as CardContextType);
export const useCardContext = () => useContext(CardContext);

type CardContextProviderProps = {
  children: ReactNode;
};

type FoodCard = {
  food: Food;
  quantity: number;
};

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [card, setCard] = useState<FoodCard[]>([]);

  const addCard = (food: Food, quantity: number) => {
    const newCard = [...card, { food, quantity }];

    setCard(newCard);
  };

  const value = {
    card,
    addCard,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
