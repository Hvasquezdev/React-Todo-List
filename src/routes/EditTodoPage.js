import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function EditTodoPage() {
  const { getTodoItemById, loading, updateTodoItem } = useTodos();
  const navigate = useNavigate();
  const { id } = useParams();

  const [todo, setTodo] = useState({});

  React.useEffect(() => {
    if (id && !loading) {
      setTodo(getTodoItemById(id));
    }
    //eslint-disable-next-line
  }, [loading]);

  const navigateToHome = () => {
    navigate("/");
  };

  const handleUpdateTodo = (newText) => {
    updateTodoItem({
      ...todo,
      text: newText,
    });
    navigateToHome();
  };

  if (loading) return <p>Cargando...</p>

  return (
    <div className="editTodoPage">
      <TodoForm
        formLabel="Edita el TODO seleccionado"
        submitLabel="Guardar cambios"
        defaultValue={todo?.text}
        submitTodo={handleUpdateTodo}
        handleClose={navigateToHome}
      />
    </div>
  );
}

export { EditTodoPage };
