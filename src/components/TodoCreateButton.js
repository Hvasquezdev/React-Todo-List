import React from "react";
import "./../assets/css/TodoCreateButton.css";

function TodoCreateButton({ setShowModal }) {
  const onClickButton = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <button className="TodoCreateButton" onClick={onClickButton}>
      <span className="TodoCreateButton-icon">+</span>
    </button>
  );
}

export { TodoCreateButton };
