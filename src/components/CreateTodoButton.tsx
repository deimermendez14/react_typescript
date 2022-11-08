import React from "react";
import "../styled-components/CreateTodoButton.css";

interface props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateTodoButton = ({ setOpenModal }: props) => {
  const onClickButton = (msg: string) => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton("Aquí se debería abrir el modal")}
      >
        +
      </button>
    </React.Fragment>
  );
};
