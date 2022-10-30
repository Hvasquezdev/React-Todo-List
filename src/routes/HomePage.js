import React from "react";
import { TodoCounter } from "./../components/TodoCounter";
import { TodoSearch } from "./../components/TodoSearch";
import { TodoCreateButton } from "./../components/TodoCreateButton";
import { TodoList } from "./../components/TodoList";
import { TodoItem } from "./../components/TodoItem";
import { TodoHeader } from "./../components/TodoHeader";
import { ChangeAlert } from "./../components/ChangeAlert";

// Hooks
import { useTodos } from "./../hooks/useTodos";
import { useStorageListener } from "./../hooks/useStorageListener";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const {
    error,
    loading,
    todoList,
    updateTodoItem,
    removeTodoItem,
    totalTodoItems,
    completedTodoItemsCount,
    searchValue,
    setSearchValue,
    loadLocalStorage,
  } = useTodos();
  const { hasStorageChanges, setStorageChanges } = useStorageListener();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalItems={totalTodoItems}
          completedItems={completedTodoItemsCount}
        />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        todos={todoList}
        totalTodos={totalTodoItems}
        searchQuery={searchValue}
        onError={() => <p>Hubo un error al traer la lista de tareas....</p>}
        onLoading={() => <p>Cargando lista de tareas, espera un poco...</p>}
        onEmptyList={() => <p>No has creado ninguna tarea...</p>}
        onEmptySearch={(query) => <p>No hay resultado para {query}...</p>}
        onRender={(todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodoItem}
            deleteTodo={removeTodoItem}
          />
        )}
      />

      <TodoCreateButton onClick={() => navigate("/new")} />
      <ChangeAlert
        hasStorageChanges={hasStorageChanges}
        setStorageChanges={setStorageChanges}
        loadLocalStorage={loadLocalStorage}
      />
    </React.Fragment>
  );
}

export { HomePage };
