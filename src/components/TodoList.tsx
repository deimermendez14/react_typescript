import React from "react";
import "../styled-components/TodoList.css"
interface TodoListProps  {
  children: React.ReactNode;
};

export const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};
