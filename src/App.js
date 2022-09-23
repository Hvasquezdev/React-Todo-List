// import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoHeader } from "./components/TodoHeader";

// Hooks
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    error,
    loading,
    todoList,
    updateTodoItem,
    removeTodoItem,
    showModal,
    addTodoItem,
    setShowModal,
    totalTodoItems,
    completedTodoItemsCount,
    searchValue,
    setSearchValue
  } = useTodos();

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

      {showModal && (
        <Modal>
          <TodoForm addTodoItem={addTodoItem} setShowModal={setShowModal} />
        </Modal>
      )}

      <TodoCreateButton setShowModal={setShowModal} />
    </React.Fragment>
  );
}

export default App;
