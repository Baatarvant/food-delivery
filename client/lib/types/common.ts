export type Food = {
  id: number;
  name: string;
  price: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
};

export type CartItem = {
  foodId: number;
  name: string;
  price: string;
  quantity: number;
};
