import { createHashRouter, RouterProvider } from "react-router-dom";
import TelaDefinirForca from "./pages/TelaDefinirForca.jsx";
import TelaCategoria from "./pages/TelaCategoria.jsx";
import TelaGameOver from "./pages/TelaGameOver.jsx";
import TelaInicial from "./pages/TelaInicial.jsx";
import TelaIdioma from "./pages/TelaIdioma.jsx";
import { createRoot } from "react-dom/client";
import TelaJogo from "./pages/TelaJogo.jsx";
import TelaWin from "./pages/TelaWin.jsx";
import { StrictMode } from "react";
import "./index.css";

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
  },
  {
    path: "/idioma",
    element: <TelaIdioma />,
  },
  {
    path: "/definirforca",
    element: <TelaDefinirForca />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
