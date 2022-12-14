import React from 'react';
import { uid } from '../utils';
import { useLocalStorage } from './../hooks/useLocalStorage';

function useTodos() {
  const {
    item: todoList,
    saveItem: setTodoList,
    loading,
    error,
    loadLocalStorageData
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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
      id: uid(),
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

  const getTodoItemById = (id) => {
    const todo = [...todoList].find((todo) => todo.id === id) || {};
    return todo;
  }

  return {
    todoList: filteredTodoList,
    setTodoList: setTodoList,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    completedTodoItemsCount: completedTodoItemsCount,
    totalTodoItems: totalTodoItems,
    updateTodoItem: updateTodoItem,
    removeTodoItem: removeTodoItem,
    getTodoItemById,
    addTodoItem,
    loading: loading,
    error: error,
    loadLocalStorage: loadLocalStorageData
  };
}

export { useTodos };