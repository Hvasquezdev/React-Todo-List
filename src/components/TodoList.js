import React from "react";
import './../assets/css/TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {
        (!props.loading && !props.error && !props.todos.length) && props.onEmptyList()
      }

      <ul className="TodoList__List">
        {(!props.loading && !props.error) && props.todos.map(props.onRender)}
      </ul>
    </section>
  );
}

export { TodoList };