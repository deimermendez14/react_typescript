import React from "react";
import { TodoContext, AppContextInterface } from "./contexts/TodoContext";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { Modal } from "./components/Modal";
import { TodoForrm } from "./components/TodoForrm";

export const AppUi = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    searchValue,
    totalTodos,
    setSearchValue,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext) as AppContextInterface;
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}

        {loading && <p>Estamos cargando, no desesperes...</p>}

        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
       	<Modal>
         <TodoForrm />
       </Modal>
      )}

      <CreateTodoButton  setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};
