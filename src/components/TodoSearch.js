import React from "react";
import './../assets/css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
        disabled={loading}
      />
    </>
  );
}

export { TodoSearch };