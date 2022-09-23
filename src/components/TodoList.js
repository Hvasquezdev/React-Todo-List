import React from "react";
import './../assets/css/TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {
        (
          !props.loading &&
          !props.error &&
          !props.totalTodos
        ) && props.onEmptyList()
      }

      {
        (!!props.totalTodos && !props.todos.length) && props.onEmptySearch(props.searchQuery)
      }

      <ul className="TodoList__List">
        {(!props.loading && !props.error) && props.todos.map(props.children || props.onRender)}
      </ul>
    </section>
  );
}

export { TodoList };