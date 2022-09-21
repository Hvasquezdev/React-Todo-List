import React from "react";
import { TodoContext } from "./store/TodoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoHeader } from "./components/TodoHeader";

function AppUI() {
  const {
    error,
    loading,
    todoList,
    updateTodoItem,
    removeTodoItem,
    showModal,
    setShowModal,
    totalTodoItems,
    completedTodoItemsCount,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalItems={totalTodoItems}
          completedItems={completedTodoItemsCount}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Hubo un error al traer la lista de tareas....</p>}
        {loading && <p>Cargando lista de tareas, espera un poco...</p>}
        {(!loading && !error && !todoList.length) && <p>No has creado ninguna tarea...</p>}

        {(!loading && !error) && todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodoItem}
            deleteTodo={removeTodoItem}
          />
        ))}
      </TodoList>

      {showModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <TodoCreateButton setShowModal={setShowModal} />
    </React.Fragment>
  );
}

export { AppUI };