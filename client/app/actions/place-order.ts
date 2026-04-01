// "use server";

import { createOrder } from "@/lib/services/create-order";

type OrderItem = {
  foodId: number;
  quantity: number;
};

export const placeOrder = async (orderItems: OrderItem[]) => {
  return await createOrder(orderItems);
};
