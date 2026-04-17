"use client";

type TodoProps = {
  todo: any;
};

export const Todo = ({ todo }: TodoProps) => {
  const onSelectTodo = (id: number) => {
    console.log(id);
  };

  return (
    <p key={todo.id} onClick={() => onSelectTodo(todo.id)}>
      {todo.title}
    </p>
  );
};
