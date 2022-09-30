import React from 'react';

const initialState = ({ initialValue }) => ({
  loading: false,
  error: false,
  item: initialValue
});

const actionTypes = {
  SET_ERROR: "SET_ERROR",
  SET_LOADING: "SET_LOADING",
  SET_ITEM: "SET_ITEM",
};

const reducer = (state, action) => {
  const getReducerObj = (payload) => ({ ...state, ...payload });

  switch (action.type) {
    case actionTypes.SET_ERROR:
      return getReducerObj({ error: action.error });

    case actionTypes.SET_LOADING:
      return getReducerObj({ loading: action.loading });

    case actionTypes.SET_ITEM:
      return getReducerObj({ item: action.item });
  
    default:
      return state;
  }
};

function useLocalStorage(itemName, initialValue = '') {
  const [{
    loading,
    error,
    item
  }, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const loadLocalStorageData = () => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, loading: true });

      const localStorageItem = localStorage.getItem(itemName);
    
      if (!localStorageItem) {
        saveItem(initialValue);
      } else {
        dispatch({ type: actionTypes.SET_ITEM, item: JSON.parse(localStorageItem) });
      }
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, error: true });
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, loading: false });
    }
  };

  React.useEffect(() => {
    setTimeout(loadLocalStorageData, 1000);
    // eslint-disable-next-line
  }, []);  

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      dispatch({ type: actionTypes.SET_ITEM, item: newItem });
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, error: true });
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
    loadLocalStorageData
  };
}

export { useLocalStorage };