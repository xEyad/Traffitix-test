import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "map",
    element: <ComingSoon />,
  },
  {
    path: "dashboard",
    element: <ComingSoon />,
  },
  {
    path: "alerts",
    element: <ComingSoon />,
  },
  {
    path: "analytics",
    element: <ComingSoon />,
  },
  {
    path: "control-panel",
    element: <ComingSoon />,
  },
  {
    path: "search",
    element: <ComingSoon />,
  },
]);

export default router;
