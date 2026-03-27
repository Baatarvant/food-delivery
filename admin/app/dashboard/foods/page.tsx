import { getCategories } from "@/lib/services/get-categories";
import { FoodAddDialog } from "./_components/FoodAddDialog";
import { Categories } from "./_components/Categories";
import { AddCategory } from "./_components/AddCategory";

export default async function FoodsPage() {
  const categories = await getCategories();

  return (
    <div>
      <Categories categories={categories} />
      <AddCategory />
      <FoodAddDialog categories={categories} />
    </div>
  );
}
