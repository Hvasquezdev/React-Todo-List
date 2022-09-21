import React from "react";
import './../assets/css/TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    const todo = {...props.todo};
    todo.completed = !todo.completed;

    props.updateTodo(todo);
  };
  const onDelete = () => {
    props.deleteTodo({...props.todo});
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.todo.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.todo.completed && 'TodoItem-p--complete'}`}>
        {props.todo.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };