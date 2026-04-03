import { cookies } from "next/headers";

export interface GetCategoriesResponse {
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
}

export interface Food {
  id: number;
  name: string;
  price: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}

export const getCategories = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const data = await fetch(
    "https://food-delivery-1-xc22.onrender.com/categories",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const { categories }: GetCategoriesResponse = await data.json();

  return categories;
};
