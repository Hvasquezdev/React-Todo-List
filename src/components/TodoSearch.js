import React from "react";
import { TodoContext } from "../store/TodoContext";
import './../assets/css/TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onInputValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onInputValueChange}
      />
      <p>{searchValue}</p>
    </>
  );
}

export { TodoSearch };