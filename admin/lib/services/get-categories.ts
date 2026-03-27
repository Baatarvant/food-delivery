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
  const data = await fetch("http://localhost:3001/categories");
  const { categories }: GetCategoriesResponse = await data.json();

  return categories;
};
