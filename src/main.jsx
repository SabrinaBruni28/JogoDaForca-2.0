import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import TelaInicial from "./pages/TelaInicial.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <TelaInicial />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
