import React from "react";

import "./App.css";


import { TodoProvider } from "../src/contexts/TodoContext";
import { AppUi } from "./AppUi";

export const App = () => {
  return (
    <React.Fragment>
      <TodoProvider>
        <AppUi/>
      </TodoProvider>
    </React.Fragment>
  );
};
