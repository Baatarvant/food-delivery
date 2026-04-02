"use client";

import { Category } from "@/lib/types/common";
import { FoodCard } from "./FoodCard";

type FoodCategoryProps = {
  category: Category;
};

export const FoodCategory = (props: FoodCategoryProps) => {
  const { category } = props;
  return (
    <div>
      <h1 className="bg-red-300">{category.name}</h1>
      <div>
        {category.foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};
