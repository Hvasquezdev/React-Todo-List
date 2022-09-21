import React from "react";
import { TodoContext } from "../store/TodoContext";
import './../assets/css/TodoCounter.css';

function TodoCounter() {
  const { totalTodoItems, completedTodoItemsCount } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">Has completado {completedTodoItemsCount} de {totalTodoItems} tareas</h2>
  );
}

export { TodoCounter };