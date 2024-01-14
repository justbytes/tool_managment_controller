import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ItemManagment from "./pages/ItemManagment/ItemManagment";
import Archive from "./pages/Archive/Archive";
import CreateWO from "./pages/CreateWO/CreateWO";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item-managment" element={<ItemManagment />} />
          <Route path="archive" element={<Archive />} />
          <Route path="create-wo" element={<CreateWO />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
