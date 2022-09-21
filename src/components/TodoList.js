import React from "react";
import './../assets/css/TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };