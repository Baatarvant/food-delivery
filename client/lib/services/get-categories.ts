import { Category } from "../types/common";

type GetCategoriesResponse = {
  categories: Category[];
};

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const response = await fetch(
    "https://food-delivery-kohl-alpha.vercel.app/categories",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );
  const data = await response.json();

  return data;
};
