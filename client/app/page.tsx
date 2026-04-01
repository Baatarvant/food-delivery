import { getCategories } from "@/lib/services/get-categories";
import { CategorySection } from "./components/category-section";
import { CartSidebar } from "./components/cart-sidebar";

export default async function Home() {
  const { categories } = await getCategories();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Food Delivery</h1>
      </header>
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
      <CartSidebar />
    </main>
  );
}
