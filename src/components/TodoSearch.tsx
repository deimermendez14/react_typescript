import React from "react";
import "../styled-components/TodoSearch.css";

interface TodoSearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoSearch = (props: TodoSearchProps) => {
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    props.setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={props.searchValue}
        onChange={onSearchValueChange}
      />
      <p>{props.searchValue}</p>
    </React.Fragment>
  );
};
