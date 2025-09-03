import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/main.scss";
import DashboardProjeto from "./Pages/DashboardProjeto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/dashboardProjeto" element={<DashboardProjeto />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
