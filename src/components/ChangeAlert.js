import React from "react";
import { withStorageListener } from "./../hocs/withStorageListener";

function ChangeAlert({ hasStorageChanges, setStorageChanges, loadLocalStorage }) {
  const handleUpdate = () => {
    console.log("asdasd");
    loadLocalStorage();
    setStorageChanges(false);
  }

  if (hasStorageChanges) {
    return (
      <React.Fragment>
        <p>Hay cambios disponibles, actualiza la pagina...</p>

        <button onClick={() => handleUpdate()}>
          Actualizar informacion
        </button>
      </React.Fragment>
    )
  }

  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };