"use server";
import { cookies } from "next/headers";

type OrderItem = {
  foodId: number;
  quantity: number;
};

export const createOrder = async (orderItems: OrderItem[]) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:3001/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ orderItems }),
  });

  const data = await response.json();
  return data;
};
