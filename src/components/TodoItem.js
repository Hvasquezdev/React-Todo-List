import React from "react";
import "./../assets/css/TodoItem.css";

import { TodoIcon } from "./TodoIcon";

function TodoItem(props) {
  const onComplete = () => {
    const todo = { ...props.todo };
    todo.completed = !todo.completed;

    props.updateTodo(todo);
  };

  const onDelete = () => {
    props.deleteTodo({ ...props.todo });
  };

  const onEdit = () => {
    console.log("editing todo");
  };

  return (
    <li className="TodoItem">
      <TodoIcon
        type="check"
        color={`${props.todo.completed ? "#4caf50" : "gray"}`}
        onClick={onComplete}
      />
      <p
        className={`TodoItem-p ${
          props.todo.completed && "TodoItem-p--complete"
        }`}
      >
        {props.todo.text}
      </p>
      <div className="TodoItem-actions">
        <TodoIcon type="edit" onClick={onEdit} />
        <TodoIcon type="delete" onClick={onDelete} />
      </div>
    </li>
  );
}

export { TodoItem };
