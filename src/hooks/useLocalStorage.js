import React from 'react';

function useLocalStorage(itemName, initialValue = '') {
  const [loading, setLoading] = React.useState(true);
  const [error] = React.useState('');
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
    
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        setItem(initialValue);
      } else {
        setItem(JSON.parse(localStorageItem));
      }

      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, []);  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };