import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function CreateTodoPage() {
  const { addTodoItem } = useTodos();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  }

  const handleSubmitTodo = (val) => {
    addTodoItem(val);
    navigateToHome(); 
  }

  return (
    <div className="createTodoPage">
      <TodoForm
        formLabel="Escribe tu nuevo TODO"
        submitLabel="Crear"
        submitTodo={handleSubmitTodo}
        handleClose={navigateToHome}
      />
    </div>
  );
}

export { CreateTodoPage };
