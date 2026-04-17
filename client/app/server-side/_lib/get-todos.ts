"use server";

import { cookies } from "next/headers";

export const getTodos = async () => {
  const cookieStore = await cookies();

  console.log(cookieStore.getAll());

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();

  return data;
};
