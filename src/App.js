// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from './store/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
