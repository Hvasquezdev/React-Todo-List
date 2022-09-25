import React from "react";

function useStorageListener() {
  const [hasStorageChanges, setStorageChanges] = React.useState(false);

  const updateStorageIfChanged = (change) => 
    change.key === "TODOS_V1" && setStorageChanges(true);

  window.addEventListener("storage", updateStorageIfChanged);

  React.useEffect(() => {
    return () => {
      window.removeEventListener("storage", updateStorageIfChanged);
    };
  }, []);

  return { hasStorageChanges, setStorageChanges };
}

export { useStorageListener };