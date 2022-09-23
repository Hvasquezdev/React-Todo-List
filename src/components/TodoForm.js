import React from "react";
import "../assets/css/TodoForm.css";

function TodoForm({ addTodoItem, setShowModal }) {
  const [todoText, setTodoText] = React.useState("");

  const onCancel = () => {
    setShowModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodoItem(todoText);
    onCancel();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        placeholder="Cortar la cebolla para el almuerzo"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
