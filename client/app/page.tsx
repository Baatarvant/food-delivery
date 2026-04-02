import { getCategories } from "@/lib/services/get-categories";
import { FoodCategory } from "./_components/FoodCategory";
import { CardSheet } from "./_components/CartSheet";

export default async function Home() {
  const { categories } = await getCategories();

  const filteredCategories = categories.filter(
    (category) => category.foods.length > 0,
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div>
        {filteredCategories.map((category) => {
          return <FoodCategory key={category.id} category={category} />;
        })}
      </div>
      <CardSheet />
    </main>
  );
}
