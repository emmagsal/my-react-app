import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Form from "./Form";
import Footer from "./Footer";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <div className="container">
    <Form />
    <Footer />
    </div>
  </StrictMode>
);

