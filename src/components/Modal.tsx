import React from "react";
import ReactDOM from "react-dom";
import "../styled-components/Modal.css"

interface props {
  children: React.ReactNode;
}
export const Modal = ({ children }: props) => {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")!
  );
};
