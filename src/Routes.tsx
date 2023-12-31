import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Map from "./pages/Map/Map";
//@ts-ignore
const basename = window.__BASENAME__;
console.log("basename", basename);
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Map />,
    },
    {
      path: `map`,
      element: <Map />,
    },
    {
      path: `dashboard`,
      element: <ComingSoon />,
    },
    {
      path: `alerts`,
      element: <ComingSoon />,
    },
    {
      path: `analytics`,
      element: <ComingSoon />,
    },
    {
      path: `control-panel`,
      element: <ComingSoon />,
    },
    {
      path: `search`,
      element: <ComingSoon />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
