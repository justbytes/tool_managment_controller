import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { WorkOrderProvider } from "./pages/ContextProviders/WorkOrderContext";
import { ToolProvider } from "./pages/ContextProviders/ToolContext";

import Home from "./pages/Home";
import ToolManagement from "./pages/ToolManagement";
import Archive from "./pages/Archive";
import CreateWO from "./pages/CreateWO";

function App() {
  return (
    <>
      <WorkOrderProvider>
        <ToolProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/item-management" element={<ToolManagement />} />
              <Route path="archive" element={<Archive />} />
              <Route path="create-wo" element={<CreateWO />} />
            </Routes>
          </HashRouter>
        </ToolProvider>
      </WorkOrderProvider>
    </>
  );
}

export default App;
