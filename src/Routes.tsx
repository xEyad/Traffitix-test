import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Map from "./pages/Map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Map />,
  },
  {
    path: "map",
    element: <Map />,
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
