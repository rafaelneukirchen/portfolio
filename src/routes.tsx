import { createBrowserRouter } from "react-router-dom";
import Chess from "./pages/Chess";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chess",
    element: <Chess />,
  },
]);
