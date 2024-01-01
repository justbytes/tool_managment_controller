import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AddItem from "./pages/AddItem";
import UpdateItem from "./pages/UpdateItem";
import CreateWO from "./pages/CreateWO/CreateWO";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="update-item" element={<UpdateItem />} />
          <Route path="create-wo" element={<CreateWO />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
