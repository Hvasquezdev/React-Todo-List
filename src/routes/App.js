import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateTodoPage } from "./CreateTodoPage";
import { EditTodoPage } from "./EditTodoPage";
import { HomePage } from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<CreateTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
