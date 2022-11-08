import React from "react";
import "../styled-components/TodoItem.css";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onComplete: VoidFunction;
  onDelete: VoidFunction;
}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className={"Icon Icon-delete"} onClick={props.onDelete}>
        X
      </span>
    </li>
  );
};
