import React from "react";
import "../assets/css/TodoForm.css";

function TodoForm({
  submitTodo,
  handleClose,
  formLabel,
  submitLabel,
  defaultValue,
}) {
  const [todoText, setTodoText] = React.useState("");

  const onCancel = () => {
    handleClose(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitTodo(todoText);
  };

  React.useEffect(() => {
    if (defaultValue) setTodoText(defaultValue);
  }, [defaultValue]);

  return (
    <form onSubmit={onSubmit}>
      <label>{formLabel}</label>
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
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
