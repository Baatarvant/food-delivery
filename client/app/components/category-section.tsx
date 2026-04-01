import { Category } from "@/lib/types/common";
import { FoodCard } from "./food-card";

export const CategorySection = ({ category }: { category: Category }) => {
  if (category.foods.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};
