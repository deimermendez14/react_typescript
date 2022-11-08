import React from "react";
import "../styled-components/TodoCounter.css";

interface TodoCounterProps {
  completed: number;
  total: number;
}

export const TodoCounter = ({ completed, total }: TodoCounterProps) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h2>
  );
};
