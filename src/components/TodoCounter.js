import React from "react";
import './../assets/css/TodoCounter.css';

function TodoCounter({ totalItems, completedItems }) {
  return (
    <h2 className="TodoCounter">Has completado {completedItems} de {totalItems} tareas</h2>
  );
}

export { TodoCounter };