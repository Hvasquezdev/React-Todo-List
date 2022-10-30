import React from "react";
import "./../assets/css/TodoCreateButton.css";

function TodoCreateButton(props) {
  return (
    <button className="TodoCreateButton" onClick={props.onClick}>
      <span className="TodoCreateButton-icon">+</span>
    </button>
  );
}

export { TodoCreateButton };
