import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function CreateTodoPage() {
  const { addTodoItem } = useTodos();
  const navigate = useNavigate();

  return (
    <div className="createTodoPage">
      <TodoForm addTodoItem={addTodoItem} handleClose={() => navigate("/")} />
    </div>
  );
}

export { CreateTodoPage };
