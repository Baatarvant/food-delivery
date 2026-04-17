import { Todo } from "./_components/Todo";
import { getTodos } from "./_lib/get-todos";

export default async function ClientPage() {
  const todos = await getTodos();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1>client</h1>

      <div>
        {todos.map((todo: any) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </main>
  );
}
