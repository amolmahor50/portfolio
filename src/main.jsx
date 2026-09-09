import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "@/components/shared/ScrollToTop";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <App />
    </BrowserRouter>
  </StrictMode>
);
