import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import App from "./App";

import "./styles/tailwind.css";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
