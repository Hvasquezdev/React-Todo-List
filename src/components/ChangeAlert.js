import React from "react";
import "./../assets/css/ChangeAlert.css";

function ChangeAlert({ hasStorageChanges, setStorageChanges, loadLocalStorage }) {
  const handleUpdate = () => {
    loadLocalStorage();
    setStorageChanges(false);
  }

  if (hasStorageChanges) {
    return (
      <div className="ChangeAlert">
        <div className="ChangeAlert__Overlay"></div>
        <div className="ChangeAlert__Wrapper">
          <p>Hay cambios disponibles, actualiza la pagina...</p>

          <button
            className="ChangeAlert__Action"
            onClick={() => handleUpdate()}
          >
            Actualizar informacion
          </button>
        </div>
      </div>
    )
  }

  return null;
}

export { ChangeAlert };