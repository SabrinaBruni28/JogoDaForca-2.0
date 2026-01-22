import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import TelaInicial from "./pages/TelaInicial.jsx";
import TelaCategoria from "./pages/TelaCategoria.jsx";
import TelaJogo from "./pages/TelaJogo.jsx";
import TelaWin from "./pages/TelaWin.jsx";
import TelaGameOver from "./pages/TelaGameOver.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <TelaInicial />,
  },
  {
    path: "/categoria",
    element: <TelaCategoria />,
  },
  {
    path: "/jogo",
    element: <TelaJogo />,
  },
  {
    path: "/win",
    element: <TelaWin />,
  },
  {
    path: "/gameover",
    element: <TelaGameOver />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
