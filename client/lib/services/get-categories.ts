import { cookies } from "next/headers";
import { Category } from "../types/common";

type GetCategoriesResponse = {
  categories: Category[];
};

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:3001/categories", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  const data = await response.json();

  return data;
};
