import { CartItem, Food } from "@/lib/types/common";

export const addItem = (state: CartItem[], food: Food): CartItem[] => {
  const existing = state.find((item) => item.foodId === food.id);

  if (existing) {
    return state.map((item) => {
      if (item.foodId === food.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }

  return [
    ...state,
    {
      foodId: food.id,
      name: food.name,
      price: food.price,
      quantity: 1,
    },
  ];
};

export const removeItem = (state: CartItem[], foodId: number): CartItem[] => {
  return state.filter((item) => item.foodId !== foodId);
};

export const updateQuantity = (
  state: CartItem[],
  foodId: number,
  quantity: number,
): CartItem[] => {
  if (quantity <= 0) {
    return state.filter((item) => item.foodId !== foodId);
  }

  return state.map((item) => {
    if (item.foodId === foodId) {
      return { ...item, quantity };
    }
    return item;
  });
};

