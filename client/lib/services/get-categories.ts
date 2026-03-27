import { Category } from "../types/common";

type GetCategoriesResponse = {
  categories: Category[];
};

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const response = await fetch("http://localhost:3001/categories");
  const data = await response.json();

  return data;
};
