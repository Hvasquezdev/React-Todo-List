import React from 'react';
import { useLocalStorage } from './../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todoList,
    saveItem: setTodoList,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  const filteredTodoList = todoList.filter((todo) => {
    const value = searchValue.trim().toLowerCase();
    const todoText = todo.text.trim().toLowerCase();

    if (value) {
      return todoText.includes(value) ? todo : undefined;
    }
    
    return todo;
  });

  const completedTodoItems = todoList.filter((todo) => !!todo.completed);
  const completedTodoItemsCount = completedTodoItems.length;
  const totalTodoItems = todoList.length;

  const getTodoItemIndex = (todo) => {
    const todoIndex = todoList.findIndex((item) => item.id === todo.id);
    return todoIndex;
  };

  const addTodoItem = (text) => {
    const listToUpdate = [...todoList];
    listToUpdate.push({
      completed: false,
      id: todoList.length,
      text
    });
    
    setTodoList(listToUpdate);
  };

  const updateTodoItem = (todo) => {
    const listToUpdate = [...todoList];
    const todoIndex = getTodoItemIndex(todo);

    listToUpdate[todoIndex] = todo;
    setTodoList(listToUpdate);
  };

  const removeTodoItem = (todo) => {
    const listToUpdate = [...todoList];
    const todoIndex = getTodoItemIndex(todo);

    listToUpdate.splice(todoIndex, 1);
    setTodoList(listToUpdate);
  };

  return (
    <TodoContext.Provider value={{
      todoList: filteredTodoList,
      setTodoList: setTodoList,
      searchValue: searchValue,
      setSearchValue: setSearchValue,
      completedTodoItemsCount: completedTodoItemsCount,
      totalTodoItems: totalTodoItems,
      updateTodoItem: updateTodoItem,
      removeTodoItem: removeTodoItem,
      addTodoItem,
      loading: loading,
      error: error,
      showModal,
      setShowModal
    }}>
      { props.children }
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };