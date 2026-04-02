"use client";

import { CardContextProvider } from "../_contexts/CartContext";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <CardContextProvider>{children}</CardContextProvider>;
};
