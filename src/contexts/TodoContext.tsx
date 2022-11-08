import React from "react";
import { useLocalStorage } from "../hooks/useLocalStroage";

export type AppContextInterface = {
  loading: boolean;
  error: any;
  totalTodos: any;
  completedTodos: any;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: any[];
  addTodo: (text: string) => void;
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Props {
  children: React.ReactNode;
}

interface todo {
  completed: boolean;
  text: string;
}

export const TodoContext = React.createContext({});

export const TodoProvider = ({ children }: Props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // Cantidad de TODOs completados
  const completedTodos = todos.filter((todo: todo) => !!todo?.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [openModal, setOpenModal] = React.useState(false);

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos: any[] = [];

  // Lógica para filtrar
  if (!(searchValue.length >= 1)) {
    searchedTodos = todos;
  }

  searchedTodos = todos.filter((todo: todo) => {
    const todoText = todo?.text?.toLowerCase();
    const searchText = searchValue?.toLowerCase();
    return todoText?.includes(searchText);
  });

  // Función para añadir un nuevo TODO
  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: todo) => todo?.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter((todo: todo) => todo?.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
