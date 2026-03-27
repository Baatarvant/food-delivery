import { getCategories } from "@/lib/services/get-categories";

export default async function Home() {
  const { categories } = await getCategories();

  return (
    <div style={{ marginLeft: 100 }}>
      <div>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h1>{category.name}</h1>
              <div>
                {category.foods.map((food) => (
                  <div key={food.id} className="flex gap-2">
                    <h1>{food.name}</h1>
                    <p>{food.price}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
