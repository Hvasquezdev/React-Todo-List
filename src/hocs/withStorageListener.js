import React from "react";

function withStorageListener(WrappedComponent) {
  return function StorageListenerComponent(props) {
    const [hasStorageChanges, setStorageChanges] = React.useState(false);

    const updateStorageIfChanged = (change) => 
      change.key === "TODOS_V1" && setStorageChanges(true);

    window.addEventListener("storage", updateStorageIfChanged);

    React.useEffect(() => {
      return () => {
        window.removeEventListener("storage", updateStorageIfChanged);
      };
    }, []);

    return (
      <WrappedComponent 
        {...props}
        hasStorageChanges={hasStorageChanges}
        setStorageChanges={setStorageChanges}
      />
    );
  }
}

export { withStorageListener };